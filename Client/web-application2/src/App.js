// Импортируем библиотеки и компоненты
import React, { useState } from 'react';
import Tabloid from './Tabloid';
import ColorSelect from './ColorSelect';
import './App.css';
import ColorRandomizedScheme from "./ColorScheme/ColorRandomizedScheme";
import ColorSolidScheme from "./ColorScheme/ColorSolidScheme";

const randomScheme = new ColorRandomizedScheme();

// Создаем функциональный компонент App
const App = () => {

  // Создаем состояния с помощью хука useState
  const [text, setText] = useState('');
  const [tabloidWidth, setTabloidWidth] = useState(30);
  const [tabloidHeight, setTabloidHeight] = useState(7);
  const [letterColor, setLetterColor] = useState('white');
  const [randomizeColors, setRandomizeColors] = useState(false);

  // Обработчики событий изменения значения состояний
  const handleTextChange = (event) => {setText(event.target.value);};
  const handleWidthChange = (event) => {setTabloidWidth(parseInt(event.target.value));};
  const handleHeightChange = (event) => {setTabloidHeight(parseInt(event.target.value));};
  const handleColorChange = (color) => {setLetterColor(color);};
  const handleRandomizeChange = (event) => {setRandomizeColors(event.target.checked);};

  const colorScheme = randomizeColors ? randomScheme : new ColorSolidScheme(letterColor);

  // Возвращаем разметку приложения
  return (
      <div className="app">
        <div className="controls">
          <label>
            Text:
            <input type="text" value={text} onChange={handleTextChange} />
          </label>
          <label>
            Width:
            <input
                type="number"
                value={tabloidWidth}
                onChange={handleWidthChange}
            />
          </label>
          <label>
            Height:
            <input
                type="number"
                value={tabloidHeight}
                onChange={handleHeightChange}
            />
          </label>
          <label>
            Color:
            <ColorSelect value={letterColor} onChange={handleColorChange} />
          </label>
          <label>
            Randomize colors:
            <input
                type="checkbox"
                checked={randomizeColors}
                onChange={handleRandomizeChange}
            />
          </label>
        </div>
        <Tabloid
            text={text}
            width={tabloidWidth}
            height={tabloidHeight}
            cellWidth={30}
            cellHeight={30}
            colorScheme = {colorScheme}
        />
      </div>
  );
};

// Экспортируем компонент App
export default App;