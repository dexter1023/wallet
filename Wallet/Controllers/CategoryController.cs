using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Wallet.Services;
using Wallet.Dto;

namespace Wallet.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : Controller
    {
        CategoryService categoryService;

        public CategoryController(CategoryService _categoryService)
        {
            categoryService = _categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            return Ok(await categoryService.GetCategories());
        }

        [HttpPost]
        public async Task<IActionResult> SaveCategory([FromBody] CategoryDto category)
        {
            if (category == null)
            {
                return BadRequest();
            }
            var created = await categoryService.SaveCategory(category);
            return Ok(created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory([FromRoute] int id, [FromBody] CategoryDto category)
        {
            if (category == null)
            {
                return BadRequest();
            }
            var updated = await categoryService.UpdateCategory(id, category);
            return Ok(updated);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory([FromRoute] int id)
        {
            await categoryService.DeleteCategory(id);
            return Ok();
        }
    }
}