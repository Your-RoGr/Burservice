using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers;

[ApiController]
public class ListController : ControllerBase
{
    public const int MAX_FILE_SIZE = 1024 * 8;

    private FileService _fileService;

    public ListController(FileService fileService)
    {
        _fileService = fileService;
    }
    
    [HttpPost]
    [Route("read")]
    public async Task<IActionResult> ReadFile(IFormFile file)
    {
        if (file.Length > MAX_FILE_SIZE)
        {
            return BadRequest(new { Message = $"Max file size is {MAX_FILE_SIZE} bytes" });
        }

        var text = _fileService.ReadFile(file);

        var result = text
            .Split('\n')
            .Select(e => e.Trim())
            .ToList();
        
        return Ok(new { List = result });
    }

    [HttpPost]
    [Route("sort")]
    public async Task<IActionResult> Sort(/*string order, */[FromBody]string[] input)
    {
        var list = new MyList<string>(input);
        return Ok(new { List = list.HeapSort() });
    }
}