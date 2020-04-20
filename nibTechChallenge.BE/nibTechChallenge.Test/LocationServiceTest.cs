using Moq;
using nibTechChallenge.Domain;
using nibTechChallenge.Repo;
using nibTechChallenge.Service;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using System.Linq;

namespace nibTechChallenge.Test
{
    public class LocationServiceTest
    {
        Mock<IJobService> _mockJobService;
        Mock<ILocationRepo> _mockLocationRepo;

        public LocationServiceTest()
        {
            _mockJobService = new Mock<IJobService>();
            _mockLocationRepo = new Mock<ILocationRepo>();
        }

        [Fact]
        public void Should_Get_Locations()
        {
            //Arrange
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

            IList<Job> jobs = new List<Job>
            {
                new Job()
                {
                    Title = "Alliances Operations Coordinator",
                    Description = "An exciting opportunity exists for a self-motivated and solutions-focused professional to provide support in the management of an insurance portfolio.",
                    Location =  locations.Single(l => l.Id == 3),
                    OpenDate = new DateTime(2020, 1, 26)
                },

                new Job()
                {
                    Title = "Customer Service Manager",
                    Description = "Tired of commuting to Sydney? nib have two great opportunities for experienced Customer Service Managers to join Newcastle or Gosford teams!",
                    Location = locations.Single(l => l.Id == 2),
                    OpenDate = new DateTime(2020, 2, 1)
                },

                new Job()
                {
                    Title = "Team Leader - Customer Care",
                    Description = "Great opportunity for an experienced Team Leader to join our brand new contact centre in Gosford. This is your chance to really make an impact!",
                    Location = locations.Single(l => l.Id == 2),
                    OpenDate = new DateTime(2020, 2, 7)
                },

                new Job()
                {
                    Title = "Retail Centre Consultant",
                    Description = "Great opportunity for a customer service and sales superstart to play in instrumental role in our business, by being the face of our retail centre.",
                    Location = locations.Single(l => l.Id == 1),
                    OpenDate = new DateTime(2020, 2, 14)
                }
            };

            _mockJobService.Setup(s => s.Get()).Returns(Task.FromResult(jobs));

            //Act
            LocationService service = new LocationService(_mockLocationRepo.Object, _mockJobService.Object);

            var result = service.Get().GetAwaiter().GetResult();

            //Assert
            Assert.Equal(4, result.Count);
        }
    }
}
