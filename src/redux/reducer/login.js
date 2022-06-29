import { 
    LOGIN_INFO,
    LOGOUT } from "../constant";

const initLoginState = {
    username: localStorage.getItem("username") == null ? "" : localStorage.getItem("username"),
    isLogin: localStorage.getItem("isLogin") == null ? "" : localStorage.getItem("isLogin"),
    permission: localStorage.getItem("permission") == null ? "" : localStorage.getItem("permission"),
}
export default function loginReducer(preState = initLoginState, action){
    const {type, data} = action;
    switch (type) {
        case LOGIN_INFO:
            localStorage.setItem("username", data.username);
            localStorage.setItem("isLogin", data.isLogin);
            localStorage.setItem("permission", data.permission);
            return {...data};
        case LOGOUT:
            localStorage.clear();
            return {}
        default:
            return preState;
    }
}