// Класс для распределения рандомных цветов среди всех символов
class ColorRandomizedScheme{
    constructor() {
        this.dict = {};
    }

    // Функция которая возращает цвет для определенного символа
    getColor(letter) {
        if (this.dict[letter] == null) {
            this.dict[letter] = this.getRandomColor();
        }
        return this.dict[letter];
    }

// Функция, которая возвращает случайный цвет из списка
    getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    };
}

// Экспорт компонента ColorRandomizedScheme
export default ColorRandomizedScheme;