import React from 'react';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.header_logo}>Logo</span>
      <span className={style.header_title}>App_name</span>
    </header>
  );
};
