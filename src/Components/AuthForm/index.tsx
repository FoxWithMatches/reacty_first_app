import { Inputs } from 'Components/Common/Inputs';
import React, { ChangeEvent, useState } from 'react';
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  // const [errorMessage, setErrorMessage = useState(' ');

  const changeHandler =
    (fieldNAme: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldNAme] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    console.log(formState, 'push on a server');
  };
  return (
    <div className={style.wrapper}>
      <h1>Auth form</h1>
      <Inputs name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
      <Inputs
        name={'Password'}
        value={formState.password}
        changeHandler={changeHandler('password')}
      />

      {/* {errorMessage !== '' && <div>{errorMessage}</div>} */}

      <button type="button" onClick={submitHandler}>
        Auth
      </button>
    </div>
  );
};
