import React, {useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router';
import { GlobalStyle } from "./style";
import {useAction} from "./hooks/useAction";

export const App = () => {
    const {setUser} = useAction();
    const user = localStorage.getItem('real-time-chat');
    useEffect(()=>{
        if(user) {
            console.log((JSON.parse(user)));
            setUser(JSON.parse(user))
        }
    },[])
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <AppRouter/>
    </BrowserRouter>
  );
}
