import React from 'react';
import { Link } from 'react-router-dom';

type OnePostPropsType = {
  title: string;
  body: string;
  id: number;
};

export const OnePost = ({ body, title, id }: OnePostPropsType) => {
  return (
    <div>
      <Link to={`/posts/${id}`}>
        <h4>{title}</h4>
      </Link>

      <p>{body}</p>
    </div>
  );
};
