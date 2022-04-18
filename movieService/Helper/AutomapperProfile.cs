using AutoMapper;
using movieService.Entities;
using movieService.Models;

namespace movieService.Helper
{
    public class AutomapperProfile : Profile
    {

        public AutomapperProfile()
        {
            CreateMap<TblMovie, MovieDTO>().ReverseMap();
        }

    }
}