using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using movieService.Entities;
using movieService.Models;
namespace movieService.Services
{
    public class MovieService : IMovieService
    {
        private readonly MovieContext _context;
        private readonly IMapper _mapper;
        public MovieService(MovieContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        // GET ALL THE RECORDS
        public async Task<MovieList> GetAllMovies()
        {
            var _movie = _context.TblMovies;
            var _data = _mapper.Map<List<MovieDTO>>(_movie);
            return new MovieList() { status = BuisnessStatus.Ok, movies = _data };
        }
        // ADD A RECORD
        public async Task<ResponseStatus> AddMovie(MovieDTO movie)
        {
            var _movie = _mapper.Map<TblMovie>(movie);
            _context.TblMovies.Add(_movie);
            await _context.SaveChangesAsync();
            return new ResponseStatus() { status = BuisnessStatus.Created, ResponseMessage = "Movie add sucessfully" };
        }
        // UPDATE A RECORD
        public async Task<ResponseStatus> UpdateMovie(MovieDTO movie, int id)
        {
            // better approach to make only one db query
            var _movie = new TblMovie();
            _movie.Id = id;
            _movie.MovieName = movie.MovieName;
            _movie.ReviewComments = movie.ReviewComments;
            _context.TblMovies.Update(_movie);
            await _context.SaveChangesAsync();
            return new ResponseStatus() { status = BuisnessStatus.Updated, ResponseMessage = "Record updated succefully" };
        }
        //DELETE A RECORD
        public async Task<ResponseStatus> DeleteMovie(int id)
        {
            var movie = await _context.TblMovies.FindAsync(id);
            if (movie != null)
            {
                _context.TblMovies.Remove(movie);
                await _context.SaveChangesAsync();
                return new ResponseStatus() { status = BuisnessStatus.Deleted, ResponseMessage = "Movie deleted sucessfully" };
            }
            else
            {
                return new ResponseStatus() { status = BuisnessStatus.Error, ResponseMessage = "Error in deleting the movie " };
            }
        }
    }
}