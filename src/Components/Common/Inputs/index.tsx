import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputsProps = {
  name: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Inputs = ({ changeHandler, value, name }: InputsProps) => {
  return (
    <label className={style.input_wrapper}>
      <span>{name}</span>
      <input value={value} className={style.input} onChange={changeHandler} />
    </label>
  );
};
