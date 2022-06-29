import { Button, Form, Input, Card, notification, message} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { LOGIN_ACTION } from '../../redux/action/login';
import './index.scss'

function Login(props){

    const {loginInfo, LOGIN_ACTION} = props;
    const navigate = useNavigate();

    const onFinish = (values) => {
        if(values.username === "admin" || values.username === "guest"){
            // localStorage.setItem("user", JSON.stringify(values));
            let permission = 1;
            if(values.username === "guest"){
                permission = 0;
            }
            const data = {
                username: values.username,
                isLogin: true,
                permission: permission
            }
            LOGIN_ACTION(data);
            message.success("Welcome :)");
            console.log(loginInfo)
            navigate("/");
        }else{
            message.error("Please try again :(");
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error("Please try again :(");
    };

    useEffect(()=>{
        const args = {
            message: 'Instruction',
            description:
              'If you login as the administrator, the username is admin. If you login as the guest, the username is guest.\n The password is 123 for both the administrator and the guest',
            duration: 0,
          };
        notification.open(args);
    },[])

    return (
        <div className='login'>
            <Card title="Management System FE demo" className='login-container'>
                <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input placeholder="Please input your username"/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password placeholder="Please input your password"/>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
            </Card>
        </div>
        
    );

}

const loginContainer = connect(
    (state) => ({loginInfo:state.loginInfo}),
    {
        LOGIN_ACTION
    }
)(Login)

export default loginContainer;