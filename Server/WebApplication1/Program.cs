using WebApplication1.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<FileService>(_ => new FileService());

builder.Services.AddControllers();

var app = builder.Build();

app.MapControllers();

app.Run();