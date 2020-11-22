using System.Collections.Generic;
using System.Linq;
using Wallet.Core.DatabaseContext;
using Wallet.Models;
using System;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Wallet.Dto;

namespace Wallet.Services
{
    public class TransactionService
    {
        WalletDbContext context;

        public TransactionService(WalletDbContext _context)
        {
            context = _context;
        }

        public async Task<List<TransactionModel>> GetTransactions()
        {
            var transactions = await context.Transaction.Include(t => t.category).ToListAsync();
            return transactions;
        }

        public async Task<TransactionModel> SaveTransaction(TransactionDto transaction)
        {
            CategoryModel categoryModel = await context.Category.Where(c => c.id == transaction.categoryId).FirstOrDefaultAsync();
            if (categoryModel == null)
            {
                throw new Exception("Brak kategorii transakcji");
            }
            var transactionModel = new TransactionModel
            {
                title = transaction.title,
                type = transaction.type,
                category = categoryModel,
                amount = transaction.amount
            };
            context.Add(transactionModel);
            await context.SaveChangesAsync();
            return transactionModel;
        }

        public async Task<TransactionModel> UpdateTransaction(int id, TransactionDto transaction)
        {
            TransactionModel transactionModel = await context.Transaction.Where(t => t.id == id).FirstOrDefaultAsync();
            CategoryModel category = await context.Category.Where(c => c.id == transaction.categoryId).FirstOrDefaultAsync();

            if (category == null)
            {
                throw new Exception("Brak kategorii transakcji");
            }

            if (transactionModel == null)
            {
                throw new Exception("Brak transakcji o tym ID");
            }

            context.Entry(transactionModel).CurrentValues.SetValues(transaction);
            await context.SaveChangesAsync();
            return transactionModel;
        }

        public async Task DeleteTransaction(int id)
        {
            var transaction = await context.Transaction.Where(t => t.id == id).FirstOrDefaultAsync();

            if (transaction == null)
            {
                throw new Exception("Brak transakcji o tym ID");
            }

            context.Remove(transaction);
        }
    }
}