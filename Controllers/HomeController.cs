using System.Web.Mvc;
using Orchard.Themes;

namespace TimeTracking.Controllers
{
    [Themed]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("TimeTracking");
        }
    }
}