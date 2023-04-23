import React from 'react';
import './Tabloid.css';

const Tabloid = ({
                     width,
                     height = 'auto',
                     cellWidth = 30,
                     cellHeight = 30,
                     letterColor,
                     randomizeColors = false,
                     text,
                 }) => {
    const rows = text.split('\n');
    const letters = rows.map((row) => row.split(''));

    const colors = randomizeColors
        ? letters.map((row) => row.map(() => getRandomColor()))
        : letters.map((row) => row.map(() => letterColor));

    const tabloidStyle = {
        width: `${width * cellWidth}px`,
        height: height === 'auto' ? 'auto' : `${height * cellHeight}px`,
        display: 'flex',
        flexDirection: 'column',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const cellStyle = {
        width: `${cellWidth}px`,
        height: `${cellHeight}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    };

    const textStyle = {
        color: 'black',
        fontWeight: 'bold',
        fontSize: `${cellHeight}px`,
    };

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

const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default Tabloid;