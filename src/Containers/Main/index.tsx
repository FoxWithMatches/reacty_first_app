import { PageWrapper } from 'Components/Common/PageWrapper';
import { Content } from 'Components/Main/Content/Content';
import React, { useEffect } from 'react';

export const Main = () => {
  console.log('Main');

  useEffect(() => {
    console.log('main mount');
    return () => console.log('main unmount');
  }, []);

  return (
    <PageWrapper>
      <Content />
    </PageWrapper>
  );
};
