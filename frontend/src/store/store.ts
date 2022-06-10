import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './user/user';

export const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch);
export type TypeRootState = ReturnType<typeof store.getState>
