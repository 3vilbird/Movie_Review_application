using System.Collections.Generic;
using System.Threading.Tasks;
using movieService.Models;

namespace movieService.Services
{
    public interface IMovieService
    {
        Task<MovieList> GetAllMovies();
        Task<AddMovieResponse> AddMovie(MovieDTO movie);
        Task<ResponseStatus> DeleteMovie(int id);
        Task<ResponseStatus> UpdateMovie(MovieDTO movie, int id);




    }
}