import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <main className={style.content}>
      <h1>Main content</h1>
      <Link to={routes.posts}>go to posts</Link>
      <button type="button" onClick={() => navigate(routes.posts)}>
        Push me
      </button>
    </main>
  );
};
