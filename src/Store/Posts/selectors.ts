import { RootStateType } from 'Store/configureStore';

export const getPostData = (state: RootStateType) => state.postsSlice.posts;
export const getPostLoading = (state: RootStateType) => state.postsSlice.loading;
export const getOnePostData = (state: RootStateType) => state.postsSlice.onePost;
