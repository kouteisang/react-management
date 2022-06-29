import {
    legacy_createStore as createStore,
    combineReducers} from "redux"
import loginReducer from "./reducer/login"

const allReducers = combineReducers({
    loginInfo:loginReducer
})

export default createStore(allReducers);