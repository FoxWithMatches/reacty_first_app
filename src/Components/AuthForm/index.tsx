import { Inputs } from 'Components/Common/Inputs';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userSliceActions } from 'Store';
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMesage] = useState('');

  const dispatch = useDispatch();

  const changeHandler =
    (fieldNAme: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldNAme] = event.target.value;
        return newData;
      });
    };

  const submitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMesage('password is short');
    } else {
      setErrorMesage('');
      dispatch(userSliceActions.setUserLoading(true))

      setTimeout(
        () => dispatch(userSliceActions.setUserData({ email: formState.email, token: '123' })),
        3000,
      );
      console.log(formState, 'push on a server');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMesage('password is short');
    } else {
      setErrorMesage('');
    }
  }, [formState.password]);
  return (
    <div className={style.wrapper}>
      <h1>Auth form</h1>
      <Inputs name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
      <Inputs
        name={'Password'}
        value={formState.password}
        changeHandler={changeHandler('password')}
        type="password"
      />

      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}

      <button type="button" onClick={submitHandler}>
        Auth
      </button>
    </div>
  );
};
