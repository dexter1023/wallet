using System.ComponentModel.DataAnnotations;

namespace Wallet.Dto
{
    public class CategoryDto
    {
        [Required]
        public string name { get; set; }

        [Required]
        public string color { get; set; }
    }
}