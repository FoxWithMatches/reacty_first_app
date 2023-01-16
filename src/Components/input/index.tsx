import './input.css';
import React, { ChangeEvent, useState } from 'react';

export const Input = () => {
  const [value, setValue] = useState('');
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <div className="input-wrapper">
      <h2>{`Input value ${value}`}</h2>
      <input value={value} className="input" onChange={changeHandler}/>
    </div>
  );
};
