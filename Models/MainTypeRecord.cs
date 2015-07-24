using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Orchard.Data.Conventions;
namespace EM.TimeTracking.Models
{
    public class MainTypeRecord
    {
        public virtual int Id { get; set; }
        public virtual string Title { get; set; }
    }
}