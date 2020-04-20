using System;
using System.Collections.Generic;
using System.Text;

namespace nibTechChallenge.Domain
{
    public class Job
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public Location Location { get; set; }
        public DateTime OpenDate { get; set; }
    }
}
