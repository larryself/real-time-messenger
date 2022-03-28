import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router';
import {GlobalStyle} from "./style";

export const App = () => {
  return (
    <BrowserRouter>
        <AppRouter/>
        <GlobalStyle/>
    </BrowserRouter>
  );
}
