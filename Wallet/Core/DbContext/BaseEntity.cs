using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wallet.Core.DatabaseContext
{
    public abstract class BaseEntity
    {
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
