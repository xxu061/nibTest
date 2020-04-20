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
    public class LocationController : ControllerBase
    {
        private readonly ILogger<LocationController> _logger;
        private readonly ILocationService _service;
        public LocationController(ILocationService service, ILogger<LocationController> logger)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet] 
        public async Task<IList<Location>> Get()
        {
            var result = await _service.Get();

            return result;
        }
    }
}
