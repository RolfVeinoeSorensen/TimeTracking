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

namespace EM.TimeTracking.Controllers.Api
{
    public class MainController : ApiController
    {        
        private readonly IAuthenticationService _authenticationService;
        private readonly IMembershipService _membershipService;
        private readonly IOrchardServices _orchardServices;
        private readonly IContentManager _contentManager;
        private readonly IMainService _mainService;

        public MainController(
            IRepository<MainRecord> mainRepository,
            IAuthenticationService authenticationService,
            IMembershipService membershipService,
            IOrchardServices orchardServices,
            IContentManager contentManager,
            IMainService mainService)
        {
            _authenticationService = authenticationService;
            _membershipService = membershipService;
            _orchardServices = orchardServices;
            _contentManager = contentManager;
            _mainService = mainService;

            Logger = NullLogger.Instance;
            T = NullLocalizer.Instance;
        }
        public ILogger Logger { get; set; }
        public Localizer T { get; set; }

        [HttpGet]
        [ActionName("getrootmembers")]
        public List<MainDto> GetRootMembers()
        {
            var result = _mainService.GetRootMembers();
            return result;
        }

        [HttpGet]
        [ActionName("getchildren")]
        public List<MainDto> GetChildren(int id)
        {
            var result = _mainService.GetChildrenMembers(id);
            return result;
        }
    }
}