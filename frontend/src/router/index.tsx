import {Route, Routes} from "react-router-dom";
import { Add } from "../page/add/add";
import { Index } from "../page/index/index";
import { Pay } from "../page/pay/pay";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/pay/:name" element={<Pay />} />
            <Route path="/add" element={<Add />} />
        </Routes>
    );
}