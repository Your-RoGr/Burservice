// Импортируем React и файл стилей Tabloid.css
import React from 'react';
import chroma from "chroma-js";
import './Tabloid.css';


// Создаем компонент Tabloid и передаем ему пропсы
const Tabloid = ({
                     width, // Ширина таблицы в количестве ячеек
                     height, // Высота таблицы в количестве ячеек (по умолчанию автоматическая высота)
                     cellWidth = 100, // Ширина ячейки таблицы в пикселях
                     cellHeight = 100, // Высота ячейки таблицы в пикселях
                     colorScheme,
                     text, // Текст, который нужно вывести в таблицу
                 }) => {

    // Вычисляем необходимую высоту таблицы, округляя в большую сторону
    height = Math.max(height, Math.ceil(text.length / width));

    // Обрезаем текст до необходимой длины
    text = text.substring(0, width * height);

    const table = [];

    // Заполняем массив пустыми строками
    for (let i = 0; i < height; i++) {
        table[i] = new Array(width);
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            table[i][j] = '';
        }
    }

    // Заполняем таблицу символами из текста
    for (let i = 0; i < text.length; i++) {
        table[Math.floor(i / width)][i % width] = text[i];
    }

    // Стили для всей таблицы
    const tabloidStyle = {
        width: `${cellWidth}px`,
        height: `${cellHeight}px`,
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
        'min-width': `${cellWidth}px`,
        'min-height': `${cellHeight}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid lightgrey',
        borderRadius: '4px',
        padding: '4px',
        margin: '1px',
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
            {table.map((row, i) => (
                <div key={i} style={rowStyle}>
                    {row.map((letter, j) => (
                        <div key={`${i}-${j}`} style={{...cellStyle, backgroundColor: colorScheme.getColor(letter)}}>
                            <span
                                style={{
                                    ...textStyle,
                                    color: chroma(colorScheme.getColor(letter)).luminance() > 0.5 ? 'black' : 'white'
                                }}>{letter}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// Экспортируем компонент Tabloid для использования в других файлах
export default Tabloid;

