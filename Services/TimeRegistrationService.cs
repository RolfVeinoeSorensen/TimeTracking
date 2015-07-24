using Orchard.Data;
using System.Linq;
using System.Collections.Generic;
using EM.TimeTracking.Dtos;
using EM.TimeTracking.Models;
using System;
using EM.TimeTracking.Extensions;

namespace EM.TimeTracking.Services
{
    public class TimeRegistrationService : ITimeRegistrationService
    {
        private readonly IRepository<MainRecord> _mainRepository;
        private readonly IRepository<MainTypeRecord> _mainTypeRepository;
        private readonly IRepository<TimeRegistrationRecord> _timeRegistrationRepository;

        public TimeRegistrationService(
            IRepository<MainRecord> mainRepository,
            IRepository<MainTypeRecord> mainTypeRepository,
            IRepository<TimeRegistrationRecord> timeRegistrationRepository
            )
        {
            _mainRepository = mainRepository;
            _mainTypeRepository = mainTypeRepository;
            _timeRegistrationRepository = timeRegistrationRepository;
        }

        public List<MainDto> GetMembersWithTimeRegistrations(int? parentId, DateTime startDate, DateTime endDate)
        {
            var members = _mainRepository.Fetch(x => x.ParentId == parentId).OrderBy(x => x.Title).ToDTOs();
            var memberIds = members.Select(x => x.key);
            var timeRegistrationsDto = _timeRegistrationRepository.Table.Where(x => memberIds.Contains(x.MainId) && x.Date.Date >= startDate.Date && x.Date.Date <= endDate.Date).ToDTOs();
            var dates = DateTimeExtensions.GetDateRange(startDate, endDate).OrderBy(x=>x.Date);
            foreach (var member in members)
            {
                var timeTrackingsAllDaysInWeek = new List<TimeRegistrationDto>();
                foreach(var dt in dates)
                {
                    var timeTracking = timeRegistrationsDto.Where(x => x.mainId == member.key && x.date.Date == dt.Date).FirstOrDefault();
                    var timeTrackingWithDate = timeTracking != null ? timeTracking : new TimeRegistrationDto { date = dt };
                    timeTrackingsAllDaysInWeek.Add(timeTrackingWithDate);
                }
                member.timeRegistrations = timeTrackingsAllDaysInWeek;
            }
            return members;
        }
    }
}