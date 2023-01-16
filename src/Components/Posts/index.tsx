import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './PostsList.module.scss'

export const PostList = () => {
  return (
    <main className={style.wrapper}>
      <h1>Posts</h1>
      <p>post 1</p>
      <p>post 2</p>
      <p>post 3</p>
      <p>post 4</p>
      <p>post 5</p>
      <Link to={routes.main}>go to main</Link>
    </main>
  );
};
