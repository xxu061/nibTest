using nibTechChallenge.Domain;
using nibTechChallenge.DTO;
using nibTechChallenge.Repo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace nibTechChallenge.Service
{
    public class JobService: IJobService, IDisposable
    {
        private IJobRepo _jobRepo;
        private ILocationRepo _locationRepo;
        private IList<Location> _locations;

        public JobService(IJobRepo jobRepo, ILocationRepo locationRepo)
        {
            _jobRepo = jobRepo;
            _locationRepo = locationRepo;
        }

        public async Task<IList<Job>> Get()
        {
            if (_locations == null || !_locations.Any())
            {
                _locations = await _locationRepo.Get();
            }
            IList<JobDto> jobs = await _jobRepo.Get();

            var result = jobs.Select(j => new Job
            {
                Title = j.Title,
                Description = j.Description,
                OpenDate = j.OpenDate,
                Location = _locations.FirstOrDefault(l => j.LocationId == l.Id)
            });

            return result.ToList();
        }

        public void Dispose()
        {
            _locations = null;
        }

    }
}
