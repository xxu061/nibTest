using Moq;
using nibTechChallenge.Domain;
using nibTechChallenge.DTO;
using nibTechChallenge.Repo;
using nibTechChallenge.Service;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace nibTechChallenge.Test
{
    public class JobServiceTest
    {
        Mock<IJobRepo> _mockJobRepo;
        Mock<ILocationRepo> _mockLocationRepo;

        public JobServiceTest()
        {
            _mockJobRepo = new Mock<IJobRepo>();
            _mockLocationRepo = new Mock<ILocationRepo>();
        }

        [Fact]
        public void Should_Get_Jobs()
        {
            //Arrange
            IList<JobDto> jobs = new List<JobDto>
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

            IList<Location> locations = new List<Location>
            {
                new Location()
                {
                    Id = 1,
                    Name = "Newcastle",
                    State = "NSW"
                },
                new Location()
                {
                    Id = 2,
                    Name = "Gosford",
                    State = "NSW"
                },
                new Location()
                {
                    Id = 3,
                    Name = "Sydney",
                    State = "NSW"
                },
                new Location()
                {
                    Id = 4,
                    Name = "Brisbane",
                    State = "QLD"
                }
            };

            _mockJobRepo.Setup(r => r.Get()).Returns(Task.FromResult(jobs));
            _mockLocationRepo.Setup(r => r.Get()).Returns(Task.FromResult(locations));

            //Act
            JobService service = new JobService(_mockJobRepo.Object, _mockLocationRepo.Object);

            var result = service.Get().GetAwaiter().GetResult();

            //Assert
            Assert.Equal(4, result.Count);
        }
    }
}
