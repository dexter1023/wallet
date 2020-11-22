using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Wallet.Services;
using Wallet.Dto;

namespace Wallet.Controllers
{
    [Route("api/transactions")]
    [ApiController]
    public class TransactionController : Controller
    {
        TransactionService transactionService;

        public TransactionController(TransactionService _transactionService)
        {
            transactionService = _transactionService;
        }

        [HttpGet]
        public async Task<IActionResult> GetTransactionss()
        {
            return Ok(await transactionService.GetTransactions());
        }

        [HttpPost]
        public async Task<IActionResult> SaveTransaction([FromBody] TransactionDto transaction)
        {
            if (transaction == null)
            {
                return BadRequest();
            }

            var created = await transactionService.SaveTransaction(transaction);
            return Ok(created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTransaction([FromRoute] int id, [FromBody] TransactionDto transaction)
        {
            if (transaction == null)
            {
                return BadRequest();
            }

            var updated = await transactionService.UpdateTransaction(id, transaction);
            return Ok(updated);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransaction([FromRoute] int id)
        {
            await transactionService.DeleteTransaction(id);
            return Ok();
        }
    }
}