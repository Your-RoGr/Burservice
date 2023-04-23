// Импортируем React и файл стилей Tabloid.css
import React from 'react';
import './Tabloid.css';

// Создаем компонент Tabloid и передаем ему пропсы
const Tabloid = ({
                     width, // Ширина таблицы в количестве ячеек
                     height = 'auto', // Высота таблицы в количестве ячеек (по умолчанию автоматическая высота)
                     cellWidth = 30, // Ширина ячейки таблицы в пикселях
                     cellHeight = 30, // Высота ячейки таблицы в пикселях
                     letterColor, // Цвет букв в ячейках
                     randomizeColors = false, // Флаг случайного выбора цветов для ячеек (по умолчанию false)
                     text, // Текст, который нужно вывести в таблицу
                 }) => {

    // Разбиваем текст на строки
    const rows = text.split('\n');

    // Разбиваем строки на массивы символов
    const letters = rows.map((row) => row.split(''));

    // Создаем массив цветов для каждой ячейки таблицы
    const colors = randomizeColors
        ? letters.map((row) => row.map(() => getRandomColor()))
        : letters.map((row) => row.map(() => letterColor));

    // Стили для всей таблицы
    const tabloidStyle = {
        width: `${width * cellWidth}px`,
        height: height === 'auto' ? 'auto' : `${height * cellHeight}px`,
        display: 'flex',
        flexDirection: 'column',
    };

    // Стили для строки таблицы
    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    // Стили для ячейки таблицы
    const cellStyle = {
        width: `${cellWidth}px`,
        height: `${cellHeight}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    };

    // Стили для текста в ячейке
    const textStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontSize: `${cellHeight}px`,
    };

    // Возвращаем разметку таблицы, создавая div-элементы для каждой строки и ячейки
    return (
        <div style={tabloidStyle}>
            {letters.map((row, i) => (
                <div key={i} style={rowStyle}>
                    {row.map((letter, j) => (
                        <div key={`${i}-${j}`} style={{ ...cellStyle, backgroundColor: colors[i][j] }}>
                            <span style={textStyle}>{letter}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// Функция, которая возвращает случайный цвет из списка
const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Экспортируем компонент Tabloid для использования в других файлах
export default Tabloid;