using System.Collections.Generic;
using System.Web.Http;
using Orchard;
using Orchard.ContentManagement;
using Orchard.Data;
using Orchard.Localization;
using Orchard.Logging;
using Orchard.Security;
using EM.TimeTracking.Services;
using EM.TimeTracking.Models;
using EM.TimeTracking.Dtos;
using System;
using EM.TimeTracking.Extensions;

namespace EM.TimeTracking.Controllers.Api
{
    public class TimeRegistrationController : ApiController
    {
        private readonly IAuthenticationService _authenticationService;
        private readonly IMembershipService _membershipService;
        private readonly IOrchardServices _orchardServices;
        private readonly IContentManager _contentManager;
        private readonly ITimeRegistrationService _timeRegistrationService;

        public TimeRegistrationController(
            IRepository<MainRecord> mainRepository,
            IAuthenticationService authenticationService,
            IMembershipService membershipService,
            IOrchardServices orchardServices,
            IContentManager contentManager,
            ITimeRegistrationService timeRegistrationService)
        {
            _authenticationService = authenticationService;
            _membershipService = membershipService;
            _orchardServices = orchardServices;
            _contentManager = contentManager;
            _timeRegistrationService = timeRegistrationService;

            Logger = NullLogger.Instance;
            T = NullLocalizer.Instance;
        }
        public ILogger Logger { get; set; }
        public Localizer T { get; set; }

        [HttpGet]
        [ActionName("getrootmemberswithtimeregistrations")]
        public List<MainDto> GetRootMembersWithTimeTrackings([FromUri]string selectedDate)
        {
            var selectedDateTime = DateTime.Parse(selectedDate);
            var startDate = selectedDateTime.DateFromDateAndWeekday(DayOfWeek.Monday);
            var endDate = startDate.AddDays(6);
            var result = _timeRegistrationService.GetMembersWithTimeRegistrations(null, startDate, endDate);
            return result;
        }

        [HttpGet]
        [ActionName("getchildmemberswithtimeregistrations")]
        public List<MainDto> GetChildMembersWithTimeTrackings(int id, [FromUri]string selectedDate)
        {
            var selectedDateTime = DateTime.Parse(selectedDate);
            var startDate = selectedDateTime.DateFromDateAndWeekday(DayOfWeek.Monday);
            var endDate = startDate.AddDays(6);
            var result = _timeRegistrationService.GetMembersWithTimeRegistrations(id, startDate, endDate);
            return result;
        }
    }
}