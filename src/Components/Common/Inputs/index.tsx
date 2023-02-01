import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputsProps = {
  name: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export const Inputs = ({ changeHandler, value, name, type = 'text' }: InputsProps) => {
  return (
    <label className={style.input_wrapper}>
      <span>{name}</span>
      <input value={value} className={style.input} onChange={changeHandler} type={type}/>
    </label>
  );
};
