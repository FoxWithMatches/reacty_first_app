import { routes } from 'Helpers/Constants/routes';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [label, setLabel] = useState('');
  console.log(location);
  const handler = () => console.log(`current label ${label}`)

  useEffect(() => {
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
      console.log('MainContent UNmount');
    };
  }, [label]);

  return (
    <main className={style.content}>
      <h1>Main content</h1>
      <p>{label}</p>
      <button type="button" onClick={() => setLabel((prev) => prev + 'Up')}>
        Set Label
      </button>
      <Link to={routes.posts}>go to posts</Link>
      <button type="button" onClick={() => navigate(routes.posts)}>
        Push me
      </button>
    </main>
  );
};
