import { 
    useState, 
    useRef, 
    useEffect } from 'react';
import {
    Card,
    Steps,
    Row,
    Col,
    Button, 
    Result,
    Divider,
    Select,
    Form,
    Input
} from 'antd'
import './index.scss'
import CustomerBreadcrumb from "../../../component/CustomerBreadcrumb";

const { Option } = Select;
const { TextArea } = Input;


function FormThree(props){
    const {nextStop} = props;

    const goBack = () => {
        nextStop(0);
    }
    
    return (
        <div>
            <Result
                status="success"
                title="The information is sent successfully!"
                subTitle="Be patient to wait for the reply :)"
                extra={[
                <Button type="primary" key="console" onClick = {goBack}>
                    Send Again
                </Button>,
                <Button key="buy">View previous record</Button>,
                ]}
            />
        </div>
    )
}

function FormTwo(props){
    const {email, information, username, previous} = props;
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 8,
                }}
            >
                <Form.Item
                    label = "Username"
                    name = "Username"
                    wrapperCol={{
                        span: 4
                    }}
                >
                    {username}
                </Form.Item>

                <Form.Item
                    label = "Email"
                    name = "Email"
                    wrapperCol={{
                        span: 4
                    }}
                >
                    {email}
                </Form.Item>
            
                <Form.Item
                    label = "Information"
                    name = "Information"
                    wrapperCol={{
                        span: 6
                    }}
                >
                    {information}
                </Form.Item>
            </Form>
            <Divider></Divider>
            <div className="steps-action">
                <Button style={{ margin: '0 8px' }} onClick={()=>{
                    previous(0);
                }}>
                    Previous
                </Button>
                <Button type="primary" loading={loading} onClick={()=>{
                    setLoading(true);
                    setTimeout(()=>{
                        setLoading(false);
                        previous(2)  
                    }, 1000)
                }}>
                    Send
                </Button> 
            </div>
        </div>
    )
}

function FormOne(props){
    console.log(props)
    const {email, information, username} = props;
    const [form] = Form.useForm();
    const mailRef = useRef(null);
    useEffect(() => {
        if(email !== "" && information !== "" && username !== ""){
            form.setFieldsValue({
                Email:email,
                Username:username,
                Information:information})
        }
    }, [])
    const onChange = (value) => {
        if(value === "Cheng Huang"){
            form.setFieldsValue({Email:"huangchengadam@gmail.com"})
        }else if(value === "Koutei"){
            form.setFieldsValue({Email:"kouteiwork@gmail.com"})
        }
    };
    
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const onFinish = (value) => {
        props.onFormFilled(value.Email, value.Information, value.Username, 1)
    }

    return (
        <div>
            <Form
                form = {form}
                name="basic"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 8,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label = "Username"
                    name = "Username"
                    rules={[
                        {
                          required: true,
                          message: 'Please select the username!',
                        },
                      ]}
                    wrapperCol={{
                        span: 4
                    }}
                >
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                        defaultValue={username}
                    >
                        <Option value="Cheng Huang">Cheng Huang</Option>
                        <Option value="Koutei">Koutei</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label = "Email"
                    name = "Email"
                    wrapperCol={{
                        span: 4
                    }}
                >
                    <Input defaultValue={email} ref={mailRef} disabled></Input>
                </Form.Item>
            
                <Form.Item
                    label = "Information"
                    name = "Information"
                    rules={[
                        {
                          required: true,
                          message: 'Please write the information here!',
                        },
                      ]}
                    wrapperCol={{
                        span: 6
                    }}
                >
                    <TextArea defaultValue={information} placeholder="Please write the infomation here" rows={4}/>
                </Form.Item>
                <Divider></Divider>
                <div className="steps-action">
                    <Button type="primary" htmlType="submit">
                        Next
                    </Button> 
                </div>
            </Form>
        </div>
    )
}

const { Step } = Steps;
const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];


function StepForm(props){
    const [current, setCurrent] = useState(0);
    const [Email, setEmail] = useState();
    const [information, setInformation] = useState();
    const [username, setUsername] = useState();

    const onFormFilled = (email, information, username, current) => {
        setCurrent(current);
        setEmail(email);
        setInformation(information);
        setUsername(username);
    }

    const previous = (current) => {
        setCurrent(current);
    }
    

    return (
        <div>
            <CustomerBreadcrumb arr={['Form','Step Form']}></CustomerBreadcrumb>
            <div className="site-card-border-less-wrapper">
                <Card
                title="When to use"
                bordered={false}
                style={{
                    width: "100%",
                }}
                >
                <p>When you need to collect information in many steps</p>
                </Card>
            </div>

            <Row>
                <Col span="24">
                    <div className='form-content'>
                        <Steps current={current}>
                            {steps.map((item) => (
                            <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        {
                            current === 0 ? <FormOne onFormFilled={onFormFilled}
                            information = {information}
                            username={username}
                            email={Email} /> : 
                            current === 1 ? <FormTwo email={Email} 
                            information = {information}
                            username={username}
                            previous = {previous}
                            /> : <FormThree
                                nextStop = {previous}
                            />
                        }
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default StepForm;