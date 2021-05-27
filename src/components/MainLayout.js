import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const MainLayout =({children})=>{
return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/home" > nav 1</Link></Menu.Item>
     <Menu.Item key="/nav2"> <Link to="/nav2" > nav 2</Link> </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', height:'100vh' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
)
}

export default MainLayout;