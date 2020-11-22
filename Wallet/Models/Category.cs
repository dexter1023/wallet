using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Wallet.Core.DatabaseContext;
using System.Collections.Generic;

namespace Wallet.Models
{
    [Table("category")]
    public class CategoryModel : BaseEntity
    {
        public CategoryModel()
        {
            transactions = new List<TransactionModel>();
        }
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string color { get; set; }
        public virtual List<TransactionModel> transactions { get; set; }
    }
}