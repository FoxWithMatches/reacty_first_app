import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostOne } from './effects';
import { OnePostType } from './type';

const initialState = {
  posts: [] as OnePostType[],
  onePost: { body: '', title: '', id: 0, userId: 0 },
  loading: false,
  error: {},
};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }: PayloadAction<OnePostType[]>) => {
      return { ...state, posts: payload, loading: false };
    });
    builder.addCase(fetchPosts.rejected, (state, { error }) => {
      return { ...state, error };
    });

    // onePost

    builder.addCase(fetchPostOne.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPostOne.fulfilled, (state, { payload }: PayloadAction<OnePostType>) => {
      return { ...state, onePost: payload, loading: false };
    });
    builder.addCase(fetchPostOne.rejected, (state, { error }) => {
      return { ...state, error };
    });
  },
});

export const { name: postsSliceName, reducer: postsSliceReducer } = postsSlice;
