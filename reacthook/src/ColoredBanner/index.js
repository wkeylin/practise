import React, { useState } from 'react';

const ColoredBanner = () => {
    const [color, setColor] = useState('red');
    const colors = ['red', 'black', 'green', 'blue'];
    const changeColor = () => {
        const index = Math.floor(Math.random() * colors.length);
        setColor(colors[index]);
    }
    return (
        <div style={{ backgroundColor: color, padding: '20px 0', textAlign: 'center' }} >
            <h2>Click below button to change color</h2>
            <br />
            <button onClick={changeColor}>点击</button>
        </div>
    );
}

export default ColoredBanner;