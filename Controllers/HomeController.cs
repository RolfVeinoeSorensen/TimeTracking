using System.Web.Mvc;
using Orchard.Themes;
using EM.TimeTracking.Services;
using EM.TimeTracking.Models;

namespace EM.TimeTracking.Controllers
{
    [Themed]
    public class HomeController : Controller
    {
        private readonly IMainService _mainService;


        public HomeController(IMainService mainService)
        {
            this._mainService = mainService;
        }
        public ActionResult Index()
        {
            var res = _mainService.GetRootMembers();
            return View("TimeTracking");
        }
    }
}