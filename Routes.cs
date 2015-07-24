using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Routing;
using Orchard.Mvc.Routes;
using Orchard.WebApi.Routes;
using System.Web.Http;

namespace EM.TimeTracking
{
    public class Routes : IRouteProvider
    {
        public void GetRoutes(ICollection<RouteDescriptor> routes)
        {
            foreach (var routeDescriptor in GetRoutes())
                routes.Add(routeDescriptor);
        }

        public IEnumerable<RouteDescriptor> GetRoutes()
        {
            return new[] {
                new RouteDescriptor {
                    Priority = 5,
                    Route = new Route(
                        "TimeTracking", // this is the name of the page url
                        new RouteValueDictionary {
                            {"area", "EM.TimeTracking"}, // this is the name of your module
                            {"controller", "Home"},
                            {"action", "Index"}
                        },
                        new RouteValueDictionary(),
                        new RouteValueDictionary {
                            {"area", "EM.TimeTracking"} // this is the name of your module
                        },
                        new MvcRouteHandler())
                }
            };
        }
    }
    public class HttpRoutes : IHttpRouteProvider
    {

        public void GetRoutes(ICollection<RouteDescriptor> routes)
        {
            foreach (RouteDescriptor routeDescriptor in GetRoutes())
            {
                routes.Add(routeDescriptor);
            }
        }

        public IEnumerable<RouteDescriptor> GetRoutes()
        {
            return new[] {
            new HttpRouteDescriptor {
                Name = "TimeTrackingApi",
                Priority = -10,
                RouteTemplate = "api/timetracking/{controller}/{action}/{id}",
                Defaults = new {
                    area = "EM.TimeTracking",
                    controller = "TimeTracking",
                    id = RouteParameter.Optional
                },
            }
        };
        }
    }
}