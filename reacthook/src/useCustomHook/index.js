// 提取ColoredBanner 中切换背景颜色的逻辑代码
import { useState } from 'react';

const useCustomHook = (colors, initialColor) => {
    const [color, setColor] = useState(initialColor);

    const changeColor = () => {
        const index = Math.floor(Math.random() * colors.length);
        setColor(colors[index]);
    }
    return [color, changeColor];
}

export default useCustomHook;