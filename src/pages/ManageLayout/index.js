import React, { useState } from 'react';
import {
  Outlet, 
  useNavigate, 
  useLocation} from 'react-router-dom'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  GithubOutlined,
  EditOutlined,
  SettingOutlined,
  LogoutOutlined,
  FormOutlined,
  PaperClipOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';

import './index.scss'
import avatarPic from '../../assets/avatar.jpeg'


const { Header, Sider, Content } = Layout;

function ManageLayout(){
  const [collapsed, setCollapsed] = useState(false);
  const navigate  = useNavigate();
  const location = useLocation();

  const getPathSelect = () => {
    let paths = location.pathname.split("/");
    let temp = [];
    let t = "";
    for(let i = 1; i < paths.length-1; i ++){
      t += "/";
      t += paths[i];
      temp.push(t);
    }
    return temp;
  }
  
  const items = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: function(){
        navigate('/')
      }
    },
    {
      label: 'form',
      icon: <FormOutlined/>,
      key: '/form',
      children:[
        {
          label:"General Form", 
          key:"/form/general-form", 
          onClick:function(){
            navigate('/form/general-form')
          }
        },
        {
          label:"Step Form", 
          key:"/form/step-form",
          onClick:function(){
            navigate('/form/step-form')
          }
        }, 
      ]
    },
    {
      label:"Others",
      icon:<PaperClipOutlined />,
      key: "/others",
      children:[
        {
          label:"Rich Text",
          key:"/others/rich-test",
          onClick:function(){
            navigate("/others/rich-test")
          }
        }
      ]
    },
    {
      label:"show",
      icon:<PieChartOutlined />,
      key: "/show",
      children:[
        {
          label:"Table",
          key:"/show/table",
          onClick:function(){
            navigate("/show/table")
          }
        }
      ]
    }
  ]


  const logout = ()=>{
    localStorage.removeItem("user");
    navigate('/login');
  }




  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height:"100vh"}}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={items}
          defaultOpenKeys={getPathSelect()}
          
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div className='header-part'>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className='right-part'>
              <div>
                <a href='https://github.com/kouteisang' target="_blank" rel="noreferrer" style={{color:"#333"}}>
                  <GithubOutlined />
                </a>
              </div>
              <div className='avatar'>
                <Avatar size='large' src={avatarPic}></Avatar>
                <div className='avatar-content'>
                  <ul>
                    <li>用户设置</li>
                    <li>
                      <EditOutlined />
                      <span>个人设置</span>
                    </li>
                    <li>
                      <SettingOutlined />
                      <span>系统设置</span>
                    </li>
                    <li onClick = {logout}>
                      <LogoutOutlined />
                      <span>退出登录</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background site-new-bg"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default ManageLayout;