/* eslint-disable multiline-ternary */
import React from 'react';
import { routes } from 'Helpers/Constants/routes';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelectors, userSliceActions } from 'Store';

export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userSliceActions.clearUserData());
  };

  return (
    <header className={style.header}>
      <span className={style.header_logo}>Logo</span>
      <ul>
        <li>
          <Link to={routes.main}>Главная</Link>
        </li>
        <li>
          <Link to={routes.posts}>Work</Link>
        </li>
        <li>
          <Link to={routes.counter}>Главная</Link>
        </li>
      </ul>
      {userEmail ? (
        <div>
          <span>{userEmail}</span>
          <button type='button' onClick={logoutHandler}>LogOut</button>
        </div>
      ) : (
        <Link to={routes.auth}>Auth</Link>
      )}
    </header>
  );
};
