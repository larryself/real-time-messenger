import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router';
import { GlobalStyle } from "./style";
import { useAction } from "./hooks/useAction";

export const App = () => {
  const {setToken} = useAction();
  if(localStorage.getItem('real-time-chat')) {
    const user = JSON.parse(localStorage.getItem('real-time-chat') as string);
      setToken({...user})
  }
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <AppRouter/>
    </BrowserRouter>
  );
}
