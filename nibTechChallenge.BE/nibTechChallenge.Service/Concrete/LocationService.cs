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
        private readonly ILocationRepo _repo;
        private readonly IJobService _jobService;
        public LocationService(ILocationRepo repo, IJobService jobService)
        {
            _repo = repo;
            _jobService = jobService;
        }
        public async Task<IList<Location>> Get()
        {
            var jobs = await _jobService.Get();

            var availableLocations = jobs.Select(j => j.Location).Distinct().ToList();

            if (!availableLocations.Any(l => l.Id == 0))
            {
                availableLocations.Add(AddAllLocation());
            }

            return availableLocations;
        }

        public async Task<IList<Location>> GetAll()
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
