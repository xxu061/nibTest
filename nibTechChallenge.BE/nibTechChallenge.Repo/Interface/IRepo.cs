using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace nibTechChallenge.Repo
{
    public interface IRepo<T>
    {
        Task<IList<T>> Get();
    }
}
