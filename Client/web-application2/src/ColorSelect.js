import React from 'react';
import './ColorSelect.css';

const ColorSelect = ({ value, onChange }) => {
    const colors = [
        { label: 'White', value: 'white' },
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' },
        { label: 'Purple', value: 'purple' },
    ];

    const handleChange = (event) => {
        onChange(event.target.value);
    };

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

export default ColorSelect;