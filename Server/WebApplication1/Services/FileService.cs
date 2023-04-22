namespace WebApplication1.Services;

public class FileService
{
    public string ReadFile(IFormFile file)
    {
        var length = file.Length;
        
        using (var readStream = new MemoryStream((int)length))
        {
            using (var stream = file.OpenReadStream())
            {
                var buffer = new byte[1024];
                var read = 0;
                while ((read = stream.Read(buffer, 0, buffer.Length)) != 0)
                {
                    readStream.Write(buffer, 0, read);
                }
            }
            
            return System.Text.Encoding.UTF8.GetString(readStream.GetBuffer());
        }
    }
}