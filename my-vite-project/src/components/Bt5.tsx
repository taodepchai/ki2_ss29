import { useState } from 'react';

let Bt5 = () => {
    let [showButton, setShowButton] = useState(true);

    let toggleButton = () => {
        setShowButton(!showButton);
    };

    let getButtonText = () => {
        return showButton ? "Hiển" : "Ẩn";
    };

    return (
        <div>
            <h1>Bt5</h1>
            <button onClick={toggleButton}>{getButtonText()}</button>
            <h1>b6 giong het b5</h1>
        </div>
    );
};

export default Bt5;
