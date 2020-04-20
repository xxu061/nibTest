using nibTechChallenge.Domain;
using nibTechChallenge.Repo;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace nibTechChallenge.Service
{
    public class LocationService : ILocationService
    {
        ILocationRepo _repo;
        public LocationService(ILocationRepo repo)
        {
            _repo = repo;
        }
        public async Task<IList<Location>> Get()
        {
            var result = await _repo.Get();

            if (!result.Any(l => l.Id == 0))
            {
                result.Add(AddAllLocation());
            }

            return result;
        }

        private Location AddAllLocation()
        {
            return new Location()
            {
                Id = 0,
                Name = "All Locations",
                State = null
            };
        }
    }
}
