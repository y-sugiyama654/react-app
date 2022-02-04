import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
    const [value, setValue] = useState<number>(0);

    const increment = () => {
        setValue((prevState) => prevState + 1);
    }

    const decremrnt = () => {
        setValue((prevState) => prevState - 1);
    }

    const renderTimes = useRef(0);
    useEffect(() => {
        renderTimes.current = renderTimes.current + 1;
    });

    return (
        <div>
            <div>value: { value }</div>
            <button onClick={increment}>+1</button>
            <button onClick={decremrnt}>-1</button>
            <div>This component was re-rendered { renderTimes.current } times!</div>
        </div>
    );
}

export default Counter;