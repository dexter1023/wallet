using Wallet.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Wallet.Dto
{
    public class TransactionDto
    {
        [Required]
        [MinLength(1)]
        public string title { get; set; }

        [Required]
        [MinLength(1)]
        public string type { get; set; }

        [Required]
        public int categoryId { get; set; }

        [Required]
        public float amount { get; set; }
    }

    public class TransactionResponse
    {
        public List<TransactionModel> transactions { get; set; }
        public float count { get; set; }
    }
}