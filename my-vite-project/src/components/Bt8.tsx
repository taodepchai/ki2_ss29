import { useState } from 'react';

let Bt8 = () => {
    let [count, setCount] = useState(0);

    let incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Bt8</h1>
            <button onClick={incrementCount}>Click {count}</button>
        </div>
    );
};

export default Bt8;
