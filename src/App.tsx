import { Auth } from 'Containers/Auth';
import { Counter } from 'Containers/Counter';
import { Main } from 'Containers/Main';
import { NotFound } from 'Containers/NotFound';
import { Posts } from 'Containers/Posts';
import { routes } from 'Helpers/Constants/routes';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    console.log('app mount');
  }, []);
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.notFound} element={<NotFound />} />
      <Route path={routes.counter} element={<Counter />} />
      <Route path={routes.auth} element={<Auth />} />
    </Routes>
  );
}

export default App;
