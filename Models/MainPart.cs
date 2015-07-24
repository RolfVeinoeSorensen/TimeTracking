using Orchard.ContentManagement;
using System.ComponentModel.DataAnnotations;

namespace EM.TimeTracking.Models
{
    public class MainPart : ContentPart<MainRecord>
    {
        public int? ParentId
        {
            get { return Record.ParentId; }
            set { Record.ParentId = value; }
        }

        [Required]
        public string Title
        {
            get { return Record.Title; }
            set { Record.Title = value; }
        }

        [Required]
        public MainTypeRecord MainType
        {
            get { return Record.MainTypeRecord; }
            set { Record.MainTypeRecord = value; }
        }
    }
}