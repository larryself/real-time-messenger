import {createSlice} from '@reduxjs/toolkit';
import {userApi} from "./user";
import type { TypeRootState} from "../store";

type UserState = {
    email: string | null
    token: string |null
    id: number | null
    name: string | null
};
const userSlice = createSlice({
    name: 'user',
    initialState: {email: null, token: null, id: null, name: null,} as UserState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.name = action.payload.name;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.name = null;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userApi.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.email = payload.email;
                state.token = payload.token;
                state.id = payload.id;
                state.name =  payload.name;
            },
        )
        builder.addMatcher(
            userApi.endpoints.signup.matchFulfilled,
            (state, {payload}) => {
                state.email = payload.email;
                state.token = payload.token;
                state.id = payload.id;
                state.name =  payload.name;
            },
        )
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const selectCurrentUser = (state: TypeRootState) => state.user
