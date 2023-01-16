import React from 'react';
import { routes } from 'Helpers/Constants/routes';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = () => {
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
          <Link to="/about">Главная</Link>
        </li>
      </ul>
      <span className={style.header_title}>App_name</span>
    </header>
  );
};
