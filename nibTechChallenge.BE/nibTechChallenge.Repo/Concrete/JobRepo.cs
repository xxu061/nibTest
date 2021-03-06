﻿using nibTechChallenge.Domain;
using nibTechChallenge.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace nibTechChallenge.Repo
{
    public class JobRepo : IJobRepo
    {
        public async Task<IList<JobDto>> Get()
        {
            //This will be coming from a database in real world. 
            List<JobDto> jobs = new List<JobDto>
            {
                new JobDto()
                {
                    Title = "Alliances Operations Coordinator",
                    Description = "An exciting opportunity exists for a self-motivated and solutions-focused professional to provide support in the management of an insurance portfolio.",
                    LocationId = 3,
                    OpenDate = new DateTime(2020, 1, 26)
                },

                new JobDto()
                {
                    Title = "Customer Service Manager",
                    Description = "Tired of commuting to Sydney? nib have two great opportunities for experienced Customer Service Managers to join Newcastle or Gosford teams!",
                    LocationId = 2,
                    OpenDate = new DateTime(2020, 2, 1)
                },

                new JobDto()
                {
                    Title = "Team Leader - Customer Care",
                    Description = "Great opportunity for an experienced Team Leader to join our brand new contact centre in Gosford. This is your chance to really make an impact!",
                    LocationId = 2,
                    OpenDate = new DateTime(2020, 2, 7)
                },

                new JobDto()
                {
                    Title = "Retail Centre Consultant",
                    Description = "Great opportunity for a customer service and sales superstart to play in instrumental role in our business, by being the face of our retail centre.",
                    LocationId = 1,
                    OpenDate = new DateTime(2020, 2, 14)
                }
            };

            return await Task.FromResult(jobs);
        }
    }
}
