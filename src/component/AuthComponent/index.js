import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom'

function AuthComponent(props){
    const {children, loginInfo} = props;
    if(loginInfo.isLogin === false){
        return <Navigate to='/login' replace></Navigate>
    }else{
        return <>{children}</>
    }
}

// export default AuthComponent;

export default connect(
    (state) => ({loginInfo:state.loginInfo}),
    {

    }
)(AuthComponent)