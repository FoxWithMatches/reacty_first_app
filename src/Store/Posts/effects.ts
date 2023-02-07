import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInctance } from 'Helpers/Network';

export const fetchPosts = createAsyncThunk('posts/all', async () => {
  const { data } = await networkInctance.get('/posts');
  return data;
});

export const fetchPostOne = createAsyncThunk('posts/byId', async (id: string) => {
  const { data } = await networkInctance.get(`/posts/${id}`);
  return data;
});
