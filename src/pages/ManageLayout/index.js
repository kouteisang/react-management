import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {Outlet, useNavigate} from 'react-router-dom'
import './index.scss'
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
    }
  ]




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
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
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

export default ManageLayout