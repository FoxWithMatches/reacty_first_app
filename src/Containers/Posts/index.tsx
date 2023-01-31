import { PageWrapper } from 'Components/Common/PageWrapper';
import { PostList } from 'Components/Posts';
import React, { useEffect } from 'react';

export const Posts = () => {
  useEffect(() => {
    const handler = () => console.log('click on post page')
    document.addEventListener('click', handler);
    console.log('post mount');
    return () => {
      document.removeEventListener('click', handler);
      console.log('post UNmount');
    };
  }, []);

  return (
    <PageWrapper>
      <PostList />
    </PageWrapper>
  );
};
