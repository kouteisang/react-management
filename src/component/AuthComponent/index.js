import {Navigate} from 'react-router-dom'

function AuthComponent({children}){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user == null){
        return <Navigate to='/login' replace></Navigate>
    }else{
        return <>{children}</>
    }
}

export default AuthComponent;