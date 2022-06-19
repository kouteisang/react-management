import {useNavigate} from 'react-router-dom'

function AuthComponent({children}){
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    if(user == null){
        navigate('/login');
    }else{
        return <>{children}</>
    }
}

export default AuthComponent;