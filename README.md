# Тестовое задание для «Бурсервис» 

Brief project description 2-3 sentences.

## Содержание

- [Введение](#Введение)
- [Структура проекта](#Структура проекта)
- [Функциональность](#Функциональность)
- [Демонстрация работы](#Демонстрация работы)
- [Запуск проекта](#Запуск проекта)
- [Авторы](#Авторы)

## Введение
Данный проект представляет собой тестовое задание для «Бурсервис» , ссылка на ТЗ — https://workspace.beelinecloud.ru/burservis/s/czcbAWkZ8ffpC24. 
Согласно ТЗ проект реализован на JS (React) для клиентской части C# для серверной части.

## Структура проекта
Client содержит папки:
- web-application1: клиентская часть для задания "Сортировка Low level";
- web-application2: клиентская часть для задания "Таблоид High level".
Server содержит серверную часть для задания "Сортировка Low level".

## Функциональность
1. "web-application1" выполняет указанную в ТЗ функциональность для задания "Сортировка Low level", а именно:
	1. Загружает файл-список c разными словами, числами, символами;
	2. Отображает загруженный список на экране в правом текстовом поле;
	3. Содержит выпадающий список для выбора варианта сортировки списка: (возрастание (ask), убывание(desc), развернуть список наоборот (reverse));
	4. При нажатии на кнопку сортирует данный список по выбранному типу;
	5. Отображает полученный результат в левом текстовом поле.

Клиентская часть содержит все формы из ТЗ: кнопка загрузки файла, изначальный список, выпадающий список типа сортировки, кнопка отсортировать, отсортированный список.
Серверная часть также выполняет требуемую функциональность: получает исходный список, сортирует его самописным методом сортировки и отправляет на фронтенд.

2. "web-application2" выполняет указанную в ТЗ функциональность для задания "Таблоид High level", а именно:
	1. Содержит текстовое поле ввода;
	2. Содержит таблоид, на котором отображается текст;
	3. Содержит выпадающий список для выбора цвета из списка стандартных цветов, который задает цвет буквенных ячеек;
	4. Опция «Рандомайзер» цветов для каждой буквенной ячейки;
	5. Содержит поле задания ширины таблоида в ячейках;
	6. Опция неограниченный рост таблоида, в зависимости от количества текста;
	7. Содержит поле задание высоты таблоида в ячейках.
  
Добавленная функциональность: цвет текста подбирается исходя из цвета фона для лучшей читаемости.

## Демонстрация работы
1. [Гифка работы первого приложения]
2. [Гифка работы второго приложения]

## Запуск проекта
Инструкция для запуска

## Авторы
Родин Григорий — https://github.com/Your-RoGr
Евдокимов Андрей — https://github.com/EvdokimovAndrey
