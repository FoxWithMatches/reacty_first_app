import React from 'react';
import { Link } from 'react-router-dom';

type OnePostContentPropsType = {
  title: string;
  body: string;
};

export const OnePostContent = ({ body, title }: OnePostContentPropsType) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <Link to={'/posts'}>Back</Link>
    </div>
  );
};
