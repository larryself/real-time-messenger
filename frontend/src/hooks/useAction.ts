import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {userActions} from "../store/user/userSlice";
;

const allActions = {
    ...userActions,
}
export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch)
}
