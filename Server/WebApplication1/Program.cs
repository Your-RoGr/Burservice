var builder = WebApplication.CreateBuilder(args);

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