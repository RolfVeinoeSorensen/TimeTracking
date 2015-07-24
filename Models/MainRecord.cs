using Orchard.ContentManagement.Records;

namespace EM.TimeTracking.Models
{
    public class MainRecord : ContentPartRecord
    {
        public virtual int? ParentId { get; set; }
        public virtual string Title { get; set; }
        public virtual MainTypeRecord MainTypeRecord { get; set; }
    }
}