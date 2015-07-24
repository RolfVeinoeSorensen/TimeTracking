using System.Collections.Generic;
using EM.TimeTracking.Dtos;
using System;

namespace EM.TimeTracking.Services
{
    public interface ITimeRegistrationService : Orchard.IDependency
    {
        List<MainDto> GetMembersWithTimeRegistrations(int? parentId, DateTime startDate, DateTime endDate);
    }
}