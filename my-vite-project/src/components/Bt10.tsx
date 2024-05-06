import { useState } from 'react';

let RandomGender = () => {
    let genders = ['Nam', 'Nữ', 'Khác'];
    let [currentGender, setCurrentGender] = useState('Nam');

    let handleRandomGender = () => {
        let randomIndex = Math.floor(Math.random() * genders.length);
        setCurrentGender(genders[randomIndex]);
    };

    return (
        <div>
            <h1>Bt10</h1>
            <p>Giới tính hiện tại: {currentGender}</p>
            <button onClick={handleRandomGender}>Random gender</button>
        </div>
    );
};

export default RandomGender;
