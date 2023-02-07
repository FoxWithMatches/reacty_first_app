import { PostList } from 'Components/Posts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostsEffects, PostsSelectors } from 'Store';

export const Posts = () => {
  const loading = useSelector(PostsSelectors.getPostLoading);
  const dispatch = useDispatch();
  const data = useSelector(PostsSelectors.getPostData);

  useEffect(() => {
    dispatch(PostsEffects.fetchPosts());
  }, []);

  return loading ? <h1>Loading...</h1> : <PostList postdata={data}/>;
};
