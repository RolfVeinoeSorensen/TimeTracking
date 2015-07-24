using System;
using TypeLite;

namespace EM.TimeTracking.Dtos
{
    public partial class MainTypeDto
    {
            public int key { get; set; }

            public String title { get; set; }


            public MainTypeDto()
            {
            }

            public MainTypeDto(int id, String Title)
            {
                key = id;
                title = title;

            }
        }
}