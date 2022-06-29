import { 
    LOGIN_INFO,
    LOGOUT } from "../constant"
export const LOGIN_ACTION = (data) => ({type:LOGIN_INFO, data:data});

export const LOGOUT_ACTION = (data) => ({type:LOGOUT, data:data})