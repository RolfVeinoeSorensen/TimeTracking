using System;
using System.Collections.Generic;
using TypeLite;

namespace EM.TimeTracking.Dtos
{
    public partial class MainDto
        {
            public int key { get; set; }
            public int parentId { get; set; }
            public String title { get; set; }
            public MainTypeDto mainType { get; set; }
            public List<TimeRegistrationDto> timeRegistrations { get; set; }

        public MainDto() { }

            public MainDto(int Id, int ParentId, String Title, MainTypeDto MainType, List<TimeRegistrationDto> TimeRegistrations)
            {
                key = Id;
                parentId = ParentId;
                title = Title;
                mainType = MainType;
                timeRegistrations = TimeRegistrations;
        }
    }
}