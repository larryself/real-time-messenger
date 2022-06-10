import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './user';
import type { TypeRootState } from '../store';

type UserState = {
  email: string | null
  token: string | null
  name: string | null
  isAuth: boolean
};

const userSlice = createSlice({
  name: 'user',
  initialState: { email: null, token: null, isAuth: false, name: null, } as UserState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isAuth = action.payload.isAuth;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.name = null;
      state.isAuth = false
      localStorage.removeItem('real-time-chat')
    },
    updateToken(state, action) {
      state.token = action.payload.token
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isAuth = true;
        localStorage.setItem('real-time-chat', JSON.stringify({ ...state }))
      },
    )
    builder.addMatcher(
      userApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isAuth = true;
        localStorage.setItem('real-time-chat', JSON.stringify({ token: payload.token, isAuth: true }))
      },
    )
    builder.addMatcher(
      userApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isAuth = true;
        localStorage.removeItem('real-time-chat')
      },
    )
    builder.addMatcher(
      userApi.endpoints.refreshToken.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isAuth = true;
        localStorage.setItem('real-time-chat', JSON.stringify({ token: payload.token, isAuth: true }))
      },
    )
  }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const selectCurrentUser = (state: TypeRootState) => state.user
