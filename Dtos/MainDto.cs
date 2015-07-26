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
            public bool lazy { get; set; }
            public bool cache { get; set; }
            public bool expanded { get; set; }

        public MainDto() { }

            public MainDto(int Id, int ParentId, String Title, MainTypeDto MainType, List<TimeRegistrationDto> TimeRegistrations, bool cache, bool expanded, bool lazy)
            {
                key = Id;
                parentId = ParentId;
                title = Title;
                mainType = MainType;
                timeRegistrations = TimeRegistrations;
                this.cache = cache;
                this.lazy = lazy;
                this.expanded = expanded;
        }
    }
}