import React, { useState } from 'react';

let Bt2 = () => {
    let [inputValue, setInputValue] = useState<string>('');
  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  };
  return (
    <div>
        <h1>Bt2</h1>
      <input type="text" value={inputValue}  onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default Bt2;
