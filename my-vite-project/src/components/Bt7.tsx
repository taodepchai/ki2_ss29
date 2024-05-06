import { useState } from 'react';

let Bt6 = () => {
    let [arr, setArr] = useState<number[]>([]);

    let handleAddNumber = () => {
        let randomNumber = Math.floor(Math.random() * 10);
        setArr([...arr, randomNumber]);
    };

    return (
        <div>
            <h1>B7</h1>
            <button onClick={handleAddNumber}>add element</button>
            <p>{'['}{arr.join(', ')}{']'}</p> 
        </div>
    );
};

export default Bt6;
