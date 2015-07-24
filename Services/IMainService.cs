using System.Collections.Generic;
using EM.TimeTracking.Dtos;

namespace EM.TimeTracking.Services
{
    public interface IMainService : Orchard.IDependency
    {
        List<MainDto> GetRootMembers();
        List<MainDto> GetChildrenMembers(int id);
    }
}