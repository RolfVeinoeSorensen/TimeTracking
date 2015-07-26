using System;

namespace EM.TimeTracking.Dtos
{
    public partial class TimeRegistrationDto
    {
        public int key { get; set; }
        public int mainId { get; set; }
        public DateTime date { get; set; }
        public decimal value { get; set; }

        public TimeRegistrationDto() { }
        public TimeRegistrationDto(int id, int MainId, DateTime Date, decimal Value)
        {
            key = id;
            mainId = mainId;
            date = date;
            value = value;
        }
    }
}