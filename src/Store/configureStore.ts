import { configureStore } from '@reduxjs/toolkit';
import { userSliceName, userSliceReducer } from './User/slice';
import { postsSliceName, postsSliceReducer } from './Posts/slice';

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReducer,
    [postsSliceName]: postsSliceReducer,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
