import { Main } from 'Containers/Main';
import { NotFound } from 'Containers/NotFound';
import { Posts } from 'Containers/Posts';
import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.notFound} element={<NotFound/>} />
    </Routes>
  );
}

export default App;
