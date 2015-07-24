using System;
using System.Collections.Generic;
using System.Linq;

namespace EM.TimeTracking.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTime DateFromDateAndWeekday(this DateTime dt, DayOfWeek startOfWeek)
        {
            int diff = dt.DayOfWeek - startOfWeek;
            if (diff < 0)
            {
                diff += 7;
            }

            return dt.AddDays(-1 * diff).Date;
        }

        public static IEnumerable<DateTime> GetDateRange(DateTime startDate, DateTime endDate)
        {
            var dates = new List<DateTime>();

            for (var dt = startDate; dt <= endDate; dt = dt.AddDays(1))
            {
                dates.Add(dt);
            }
            return dates;
        }
    }
}