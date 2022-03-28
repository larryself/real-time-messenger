import React, { FC} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "../page/signup/signup";
import { HomePage } from "../page/index/index";
import { Login } from "../page/login/login";
import {useAppSelector} from "../hooks/useAppSelector";
import {NotFound} from "../page/404/notFound";


interface PrivateRouteProps {
    children: React.ReactElement;
    user: string | null;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, user })=> {
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export const AppRouter = () => {
    const {email} = useAppSelector(state => state.user)
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={
                <PrivateRoute user={email}>
                    <HomePage/>
                </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
