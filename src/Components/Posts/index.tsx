import React from 'react';

import { OnePostType } from 'Store/Posts/type';
import { OnePost } from './OnePost';
import style from './PostsList.module.scss';

type PostListPropsType = {
  postdata: OnePostType[];
};

export const PostList = ({ postdata }: PostListPropsType) => {
  console.log(postdata, 'postdata');

  return (
    <main className={style.wrapper}>
      <h1>post</h1>
      {postdata.map((el) => (
        <OnePost key={el.id} title={el.title} body={el.body} id={el.id}/>
      ))}
    </main>
  );
};
