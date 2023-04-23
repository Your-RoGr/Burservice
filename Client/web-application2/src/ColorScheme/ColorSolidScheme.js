// Класс для распределения одного цвета среди всех символов
class ColorSolidScheme {

    constructor(color) {
        this.color = color;
    }

    // Функция которая возращает цвет для определенного символа
    getColor(letter) {
        return this.color;
    }
};

// Экспорт компонента ColorSolidScheme
export default ColorSolidScheme;