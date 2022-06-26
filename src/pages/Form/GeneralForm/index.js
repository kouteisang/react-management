import { useState } from "react";
import { 
    Card, 
    Row, 
    Col, 
    Alert, 
    Divider, 
    Form, 
    Input, 
    Radio, 
    InputNumber, 
    DatePicker, 
    AutoComplete,
    Cascader,
    Select,
    Button,
    message} from "antd";
import './index.scss'
import CustomerBreadcrumb from "../../../component/CustomerBreadcrumb";

const { Option } = AutoComplete;

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

function GeneralForm(){

    const [form] = Form.useForm();
    const [result, setResult] = useState([]);
      
      const onChange = (value) => {
        console.log(value);
      };
      

    const handleSearch = (value) => {
      let res = [];
      if (!value || value.indexOf('@') >= 0) {
        res = [];
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
      }
  
      setResult(res);
    };

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        message.success("Success :)");

    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.warning("Please check the form again :(");
    };

    const compareWithNext = (rule, value, callback)=>{
        let passwordAgain = form.getFieldValue("PasswordAgain");
        if(passwordAgain !== null && passwordAgain !== value){
            callback("The password is not same!")
        }else{
            callback();
        }
    }

    const compareWithBefore = (rule, value, callback) => {
        let password = form.getFieldValue("Password")
        if(password !== value){
            callback("The password is not same!")
        }else{
            callback();
        }
    }

    const  prefixSelector = ()=>{
        return (
            <Select defaultValue="+45">
                <Option value="+86">+86</Option>
                <Option value="+45">+45</Option>
            </Select>
        )
    }

    return (
        <div>
            <CustomerBreadcrumb arr={['Form','General Form']}></CustomerBreadcrumb>
            <div className="site-card-border-less-wrapper">
                <Card
                title="When to use"
                bordered={false}
                style={{
                    width: "100%",
                }}
                >
                <p>When you want to create an entity or to collect information</p>
                <p>Remember to verify the input data type</p>
                </Card>
            </div>

            <Row>
                <Col>
                    <div className='form-content'>
                        <Alert
                            message="Please fill the form below carefully"
                            type="warning"
                            closable
                            onClose={onClose}
                        />
                        <Divider orientation="left">General Form</Divider>
                        <Form
                            form = {form}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 8,
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
                                    name="Username"
                                    rules={[
                                        {
                                          required: true,
                                          message: 'Please input your username!',
                                        },
                                      ]}
                                >
                                    <Input style={{width:"50%"}}/>
                                </Form.Item>
                                
                                <Form.Item 
                                    label="Sex"
                                    name="Sex"
                                    rules={[
                                        {
                                            required: true
                                        }
                                    ]}
                                >
                                    <Radio.Group>
                                        <Radio value='Male'>Male</Radio>
                                        <Radio value='Female'>Female</Radio>
                                        <Radio value='Others'>Others</Radio>
                                    </Radio.Group>
                                </Form.Item>

                                <Form.Item
                                    label="Age"
                                    name="Age"
                                    rules={[
                                        {
                                            required: true
                                        }
                                    ]}
                                >
                                    <InputNumber min={0} max={200} style={{width:"50%"}}></InputNumber>
                                </Form.Item>
                                
                                <Form.Item
                                    label="birthday"
                                    name="birthday"
                                    rules={[
                                        {
                                            required: true
                                        }
                                    ]}
                                >
                                    <DatePicker style={{width:"50%"}} format={dateFormatList} />
                                </Form.Item>

                                <Form.Item
                                    label="Mail"
                                    name="Mail"
                                    rules={[
                                        {
                                            required: true
                                        }
                                    ]}
                                >
                                    <AutoComplete
                                        style={{
                                            width: "50%",
                                        }}
                                        onSearch={handleSearch}
                                        placeholder="input here"
                                        >
                                        {result.map((email) => (
                                            <Option key={email} value={email}>
                                            {email}
                                            </Option>
                                        ))}
                                    </AutoComplete>
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="Password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: compareWithNext
                                    }
                                ]}
                                >
                                    <Input.Password  style={{width:"50%"}}/>
                                </Form.Item>
                                <Form.Item
                                    label="PasswordAgain"
                                    name="PasswordAgain"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: compareWithBefore
                                    }
                                ]}
                                >
                                    <Input.Password  style={{width:"50%"}}/>
                                </Form.Item>
                                
                                <Form.Item
                                    label="address"
                                    name="address"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please choose your address!',
                                    }
                                ]}
                                >
                                    <Cascader style={{width:"50%"}} defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} /> 
                                </Form.Item>

                                <Form.Item
                                    label="Tel"
                                    name="telno"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your telphone number!',
                                    }
                                ]}
                                >
                                    <Input addonBefore={prefixSelector()} style={{width:"50%"}} />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                </Form.Item>
                        
                        </Form>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default GeneralForm;