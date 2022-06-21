import React, { useState } from 'react';
import {Outlet, useNavigate} from 'react-router-dom'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  GithubOutlined,
  EditOutlined,
  SettingOutlined,
  LogoutOutlined,
  FormOutlined,
  PaperClipOutlined
} from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';

import './index.scss'
import avatarPic from '../../assets/avatar.jpeg'


const { Header, Sider, Content } = Layout;

function ManageLayout(){
  const [collapsed, setCollapsed] = useState(false);
  const navigate  = useNavigate();

  const items = [
    {
      key: 'Home',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: function(){
        navigate('/')
      }
    },
    {
      label: 'form',
      icon: <FormOutlined/>,
      key: 'form',
      children:[
        {
          label:"General Form", 
          key:"general-form", 
          onClick:function(){
            navigate('/form/general-form')
          }
        },
        {
          label:"Step Form", 
          key:"step-form",
          onClick:function(){
            navigate('/form/step-form')
          }
        }, 
      ]
    },
    {
      label:"Others",
      icon:<PaperClipOutlined />,
      key: "others",
      children:[
        {
          label:"Rich Text",
          key:"rich-text",
          onClick:function(){
            navigate("/others/rich-test")
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
          defaultSelectedKeys={['1']}
          items={items}
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
                <a href='https://github.com/kouteisang' target="_blank" style={{color:"#333"}}>
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