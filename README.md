# Тестовое задание для «Бурсервис»

## Содержание

- [Введение](#Введение)
- [Структура](#Структура)
- [Функциональность](#Функциональность)
- [Демонстрация](#Демонстрация)
- [Запуск](#Запуск)
- [Авторы](#Авторы)

## Введение

Данный проект представляет собой тестовое задание для «Бурсервис».<br>
Ссылка на ТЗ — https://workspace.beelinecloud.ru/burservis/s/czcbAWkZ8ffpC24.<br>
Согласно ТЗ проект реализован на JS (React) для клиентской части и C# для серверной части.<br>

## Структура

`Client` содержит папки:
- `web-application1`: клиентская часть для задания "Сортировка Low level";
- `web-application2`: клиентская часть для задания "Таблоид High level".

`Server` содержит серверную часть для задания "Сортировка Low level".

## Функциональность

### `web-application1`

Выполняет указанную в ТЗ функциональность для задания "Сортировка Low level", а именно:
1. Загружает файл-список c разными словами, числами, символами;
2. Отображает загруженный список на экране в правом текстовом поле;
3. Содержит выпадающий список для выбора варианта сортировки списка: (возрастание (ask), убывание(desc), развернуть список наоборот (reverse));
4. При нажатии на кнопку сортирует данный список по выбранному типу;
5. Отображает полученный результат в левом текстовом поле.

Клиентская часть содержит все формы из ТЗ: кнопка загрузки файла, изначальный список, выпадающий список типа сортировки, кнопка отсортировать, отсортированный список.

Серверная часть также выполняет требуемую функциональность: получает исходный список, сортирует его самописным методом сортировки и отправляет на фронтенд.

### `web-application2`
Выполняет указанную в ТЗ функциональность для задания "Таблоид High level", а именно:
1. Содержит текстовое поле ввода;
2. Содержит таблоид, на котором отображается текст;
3. Содержит выпадающий список для выбора цвета из списка стандартных цветов, который задает цвет буквенных ячеек;
4. Опция «Рандомайзер» цветов для каждой буквенной ячейки;
5. Содержит поле задания ширины таблоида в ячейках;
6. Опция неограниченный рост таблоида, в зависимости от количества текста;
7. Содержит поле задание высоты таблоида в ячейках. 

Добавленная функциональность: цвет текста подбирается исходя из цвета фона для лучшей читаемости.

## Демонстрация

`web-application1` — "Сортировка Low level"
![test-web-app1](https://user-images.githubusercontent.com/115878885/234077136-5bcf4b0d-817b-4453-a01f-6ac2decd57d0.gif)

`web-application2` — "Таблоид High level"
![test-web-app2](https://user-images.githubusercontent.com/115878885/234078852-fa08a4b5-9942-4cfd-999d-e88637f84012.gif)

## Запуск

## Запуск "Сортировка Low level"

Для запуска первого приложения можно воспользоваться докером или запустить приложение через терминал. Для проверки работы приложения в корне есть файл `test.txt`

### Докер

1. Установить докер с [офицального сайта](https://www.docker.com/products/docker-desktop/)
2. В корне проекта вызвать команду в терминале `docker compose up`
   
### Терминал

1. В .\Server\WebApplication1 вызвать команду в терминале `dotnet run --urls=http://localhost:15647/` (Требуется [.NET SDK](https://dotnet.microsoft.com/en-us/download) для .NET 7.0)
2. В .\Client\web-application1 вызвать команду в терминале `npm install` (Требуется [Node.js v18.16.0](https://nodejs.org/en))
3. В .\Client\web-application1 вызвать команду в терминале `npm start`

## Запуск "Таблоид High level"

Второе приложение можно запустить через терминал.

1. В .\Client\web-application2 вызвать команду в терминале `npm install` (Требуется [Node.js v18.16.0](https://nodejs.org/en))
2. В .\Client\web-application2 вызвать команду в терминале `npm start`
   
## Авторы

- Родин Григорий — https://github.com/Your-RoGr
1. Реализовал функциональность для серверной части `web-application1`:
   - Создал сервер;
   - Реализовал метод сортировки на сервере; 
   - Наладил взаимодействие клиента и сервера со стороны сервера.
2. Совместно реализовал функциональность для клиентской части `web-application2`:
   - Создал формы;
   - Реализовал компоненты и логику работы приложения.
   

- Евдокимов Андрей — https://github.com/EvdokimovAndrey
1. Реализовал основную функциональность для клиентской части `web-application1`:
   - Создал формы;
   - Реализовал компоненты и логику работы приложения;
   - Наладил взаимодействие клиента и сервера со стороны клиента.
2. Совместно реализовал функциональность для клиентской части `web-application2`:
   - Добавил стили;
   - Реализовал адаптивность цвета текста.


