import React, { useState } from 'react';

let Bt4 = () => {
    let [selectedValue, setSelectedValue] = useState<string>('');
    let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <h1>Bt4</h1>
            <select value={selectedValue} onChange={handleChange}>
                <option value="Hanoi">Hà Nội</option>
                <option value="Hochiminh">TP. Hồ Chí Minh</option>
                <option value="Danang">Đà Nẵng</option>
                <option value="Hue">Huế</option>
            </select>
            <p>{selectedValue}</p>
        </div>
    );
};

export default Bt4;
