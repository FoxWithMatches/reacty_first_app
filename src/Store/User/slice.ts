import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
  loading: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData(
      state,
      { payload: { token, email } }: PayloadAction<{ email: string; token: string }>,
    ) {
      return { ...state, email, token };
    },

    setUserLoading(state, { payload }: PayloadAction<boolean>) {
      return { ...state, loading: payload };
    },

    clearUserData(state) {
      return { ...initialState };
    },
  },
});

export const {
  name: userSliceName,
  reducer: userSliceReducer,
  actions: userSliceActions,
} = userSlice;
