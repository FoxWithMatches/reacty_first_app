import React, { useState, useEffect } from 'react';
import style from './Counter.module.scss';

type CounterPropsType = {
  title: string;
  count?: number;
};

const Counter = (props: CounterPropsType) => {
  console.log('counter component');
  const { title } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('counter component mount');
  }, []);

  useEffect(() => {
    console.log('counter component update');
  }, [count]);

  const [label, setLabel] = useState('');

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };
  return (
    <div className={style.counter_wrapper}>
      <p>{label}</p>
      <button type="button" onClick={() => setLabel((prev) => prev + 'Up')}>
        Set Label
      </button>
      <h1>{title}</h1>
      <div className={style.counter_group}>
        <button disabled={count === 0} onClick={decrementHandler}>
          remove
        </button>
        <h2>{count}</h2>
        <button onClick={incrementHandler}>Add</button>
      </div>
    </div>
  );
};

export const CounterComponent = React.memo(Counter, (prev, next) => (prev.title === next.title));
