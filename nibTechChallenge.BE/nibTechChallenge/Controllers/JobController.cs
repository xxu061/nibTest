using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using nibTechChallenge.Domain;
using nibTechChallenge.Service;

namespace nibTechChallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {
        private readonly ILogger<JobController> _logger;
        private readonly IJobService _service; 
        public JobController(IJobService service, ILogger<JobController> logger)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet] 
        public async Task<IList<Job>> Get()
        {
            var result = await _service.Get();

            return result;
        }
    }
}
