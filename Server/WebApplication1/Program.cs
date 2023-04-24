using WebApplication1.Services;

var builder = WebApplication.CreateBuilder(args);

// Добавляем Файловый сервис, сейчас не актуален, так как читаем файл на стороне клента
builder.Services.AddTransient<FileService>(_ => new FileService());

// Регистрируем наши контроллеры из папки Controllers
builder.Services.AddControllers();

var app = builder.Build();

// Разрешаем слать любые запросы хоть откуда
app.UseCors((b) =>
{
    b
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
});

// Добавляем маршрутизацию для определенных нами контроллеров из папки Controllers
app.MapControllers();

app.Run();