import { CounterComponent } from 'Components/counterComponent';
import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [label, setLabel] = useState('label');
  useEffect(() => {
    console.log('counter component mount');
  }, [label]);
  return (
    <div>
      <p>{label}</p>
      <button type="button" onClick={() => setLabel((prev) => prev + 'Up')}>
        Set Label
      </button>
      <CounterComponent title={label} />
    </div>
  );
};
