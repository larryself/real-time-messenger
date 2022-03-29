import { createSlice } from '@reduxjs/toolkit';
import { userApi } from "./user";
import type { TypeRootState } from "../store";

type UserState = {
    email: string | null
    token: string |null
    name: string | null
    isAuth: boolean
};

const userSlice = createSlice({
    name: 'user',
    initialState: {email: null, token: null, isAuth: false, name: null,} as UserState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.name = action.payload.name;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.name = null;
            state.isAuth = false
            localStorage.removeItem('real-time-chat')
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userApi.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.token = payload.token;
                state.isAuth = true;
                localStorage.setItem('real-time-chat', JSON.stringify({token: payload.token, isAuth: true}))
            },
        )
        builder.addMatcher(
            userApi.endpoints.signup.matchFulfilled,
            (state, {payload}) => {
                state.token = payload.token;
                localStorage.setItem('real-time-chat', JSON.stringify({token: payload.token, isAuth: true}))
            },
        )
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const selectCurrentUser = (state: TypeRootState) => state.user
