using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Wallet.Core.DatabaseContext;

namespace Wallet.Models
{
    [Table("transaction")]
    public class TransactionModel : BaseEntity
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string type { get; set; }
        public float amount { get; set; }
        public virtual CategoryModel category { get; set; }
    }
}