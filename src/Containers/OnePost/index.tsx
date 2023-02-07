import { OnePostContent } from 'Components/OnePostContent';
import { Posts } from 'Containers/Posts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostsEffects, PostsSelectors } from 'Store';

export const OnePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(PostsSelectors.getOnePostData)

  useEffect(() => {
    if (postId) {
      dispatch(PostsEffects.fetchPostOne(postId));
    }
  }, [postId]);

  return <OnePostContent title={postData.title} body={postData.body} />;
};
