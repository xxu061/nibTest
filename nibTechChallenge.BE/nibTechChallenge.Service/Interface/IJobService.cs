using nibTechChallenge.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace nibTechChallenge.Service
{
    public interface IJobService
    {
        Task<IList<Job>> Get();
    }
}
