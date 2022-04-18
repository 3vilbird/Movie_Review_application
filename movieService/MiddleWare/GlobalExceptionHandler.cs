using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace movieService.MiddleWare
{
    public class GlobalExceptionHandler : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {

            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                // global exception handler
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync("Semething went wrong, Please try again later.");
            }


        }
    }
}