import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
    </Routes>
  );
}

export default App;
