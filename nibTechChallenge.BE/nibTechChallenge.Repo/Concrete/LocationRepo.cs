using Newtonsoft.Json;
using nibTechChallenge.Domain;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace nibTechChallenge.Repo
{
    public class LocationRepo : ILocationRepo
    {
        public async Task<IList<Location>> Get()
        {
            using(HttpClient client = new HttpClient())
            {
                var response = await client.GetAsync("https://private-8dbaa-nibdevchallenge.apiary-mock.com/location");
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<List<Location>>(content);
                }
                else
                {
                    throw new Exception(response.StatusCode.ToString());
                }
            }
        }
    }
}
