using Orchard.Data;
using System.Linq;
using System.Collections.Generic;
using EM.TimeTracking.Dtos;
using EM.TimeTracking.Models;

namespace EM.TimeTracking.Services
{
    public class MainService : IMainService
    {
        private readonly IRepository<MainRecord> _mainRepository;
        private readonly IRepository<MainTypeRecord> _mainTypeRepository;

        public MainService(
            IRepository<MainRecord> mainRepository, 
            IRepository<MainTypeRecord> mainTypeRepository
            )
        {
            _mainRepository = mainRepository;
            _mainTypeRepository = mainTypeRepository;
        }



        public List<MainDto> GetRootMembers()
        {
            var members = _mainRepository.Fetch(x => x.ParentId == null).OrderBy(x => x.Title).ToDTOs();
            return members;
        }

        public List<MainDto> GetChildrenMembers(int id)
        {
            var children = _mainRepository.Fetch(x => x.Id == id).OrderBy(x => x.Title).ToDTOs();
            return children;
        }

        public MainTypeRecord GetType(int id)
        {
            var type = _mainTypeRepository.Fetch(x => x.Id == id).FirstOrDefault();
            return type;
        }
    }
}