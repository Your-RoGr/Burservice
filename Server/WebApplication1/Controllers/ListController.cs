using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers;

// Помечаем класс как контроллер
[ApiController]
public class ListController : ControllerBase
{
    // Помечаем метод как POST запрос по url [host]/sort?order=[???]
    [HttpPost]
    [Route("sort")]
    public async Task<IActionResult> Sort([FromQuery]string order, [FromBody]string[] input)
    {
        var list = new MyList<string>(input);
        
        // Оператор switch для сортировки списка в зависимости от значения параметра order
        switch (order)
        {
            case "asc":
                return Ok(list.HeapSort());
            case "desc":
                var temp = list.HeapSort();
                list.InnerEnumerable = temp;
                return Ok(list.Reverse());
            case "reverse":
                return Ok(list.Reverse());
        }
        
        // Если значение параметра order не соответствует ни одному из вариантов, возвращаем ошибку
        return BadRequest("Not supported order");
    }
}