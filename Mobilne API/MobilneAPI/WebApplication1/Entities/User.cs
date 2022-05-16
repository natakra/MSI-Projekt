using Microsoft.AspNetCore.Identity;

namespace MobilneAPI.Entities
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Adress { get; set; }
        public string PostalCode { get; set; }
    }
}
