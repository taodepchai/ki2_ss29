import React, { useState } from 'react';

let Bt3 = () => {
    let [inputValue, setInputValue] = useState<string>('');
  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  };
  return (
    <div>
        <h1>Bt3</h1>
      <input type="date" value={inputValue}  onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default Bt3;
