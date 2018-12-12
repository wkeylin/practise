import React from 'react'
import useCustomHook from '../useCustomHook';

const ColoredBannerCustomHook = () => {
    const colors = ['red', 'black', 'green', 'blue'];
    const [color, changeColor] = useCustomHook(colors, 'red');

    return (
        <div style={{ backgroundColor: color, padding: '20px 0', textAlign: 'center', marginTop: '30px' }} >
            <h2>Click below button to change color</h2>
            <br />
            <button onClick={changeColor}>点击</button>
        </div>
    );
}
export default ColoredBannerCustomHook;