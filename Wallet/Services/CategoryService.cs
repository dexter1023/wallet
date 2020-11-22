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
    public class CategoryService
    {
        WalletDbContext context;
        public CategoryService(WalletDbContext _context)
        {
            context = _context;
        }

        public async Task<List<CategoryModel>> GetCategories()
        {
            var categories = await context.Category.ToListAsync();
            return categories;
        }

        public async Task<CategoryModel> SaveCategory(CategoryDto category)
        {
            var categoryModel = new CategoryModel
            {
                name = category.name,
                color = category.color
            };

            context.Add(categoryModel);
            await context.SaveChangesAsync();
            return categoryModel;
        }

        public async Task<CategoryModel> UpdateCategory(int id, CategoryDto category)
        {
            var categoryModel = await context.Category.Where(c => c.id == id).FirstOrDefaultAsync();

            if (categoryModel == null)
            {
                throw new Exception("Nie ma kategorii o tym ID");
            }

            context.Entry(categoryModel).CurrentValues.SetValues(category);
            await context.SaveChangesAsync();
            return categoryModel;
        }

        public async Task DeleteCategory(int id)
        {
            var categoryModel = await context.Category.Where(c => c.id == id).FirstOrDefaultAsync();
            if (categoryModel == null)
            {
                throw new Exception("Nie ma kategorii o tym ID");
            }

            context.Remove(categoryModel);
            await context.SaveChangesAsync();
        }
    }
}