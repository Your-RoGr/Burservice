// Импорт React и стилей для ColorSelect компонента
import React from 'react';
import './ColorSelect.css';

// Определение компонента ColorSelect с использованием деструктуризации props
const ColorSelect = ({ value, onChange }) => {

    // Создание массива объектов, представляющих возможные цвета, с их метками и значениями
    const colors = [
        { label: 'White', value: 'white' },
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' },
        { label: 'Purple', value: 'purple' },
    ];

    // Обработчик изменения значения в select
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    // Возвращает select, с текущим выбранным значением value и
    // опциями для каждого элемента в colors
    return (
        <select value={value} onChange={handleChange} className="color-select">
            {colors.map((color) => (
                <option key={color.value} value={color.value}>
                    {color.label}
                </option>
            ))}
        </select>
    );
};

// Экспорт компонента ColorSelect
export default ColorSelect;