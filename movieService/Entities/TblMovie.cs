using System;
using System.Collections.Generic;

#nullable disable

namespace movieService.Entities
{
    public partial class TblMovie
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string ReviewComments { get; set; }
    }
}
