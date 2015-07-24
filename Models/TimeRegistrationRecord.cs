using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Orchard.Data.Conventions;

namespace EM.TimeTracking.Models
{
    public class TimeRegistrationRecord
    {
        public virtual int Id { get; set; }
        public virtual int MainId { get; set; }
        public virtual DateTime Date { get; set; }
        public virtual decimal Value { get; set; }
    }
}