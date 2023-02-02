import { CheckAuth } from 'Components/Common/CheckAuth';
import { PostList } from 'Components/Posts';
import React, { useEffect } from 'react';

export const Posts = () => {
  useEffect(() => {
    const handler = () => console.log('click on post page');
    document.addEventListener('click', handler);
    console.log('post mount');
    return () => {
      document.removeEventListener('click', handler);
      console.log('post UNmount');
    };
  }, []);

  return (
    <CheckAuth>
      <PostList />
    </CheckAuth>
  );
};
