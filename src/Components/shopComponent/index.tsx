import React, { useState } from 'react';
import './shopComponent.css';

type CounterPropsType = {
  title: string;
  price: string;
  image: string;
  count?: number;
};

export const ShopComponent = (props: CounterPropsType) => {
  const { title, price, image } = props;
  const [count, setCount] = useState(0)
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  }
  const decrementHandler = () => {
    setCount((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  }
  return (
    <div className="shop-container">
      <img src={image} alt="img" className="image" />
      <h3>{price}</h3>
      <h4>{title}</h4>
      <div className='container-basket'>
        <p className='count-num'>{count}
            <button className='btn-count-minus' disabled={count === 0} onClick={decrementHandler}>-</button>
            <button className='btn-count-plus' onClick={incrementHandler}>+</button>
        </p>
        <button className='basket'>В корзину</button>
      </div>
    </div>
  );
};
