import React, { useState }  from "react";
import '../../assets/style/demo.scss'
import { Link, Outlet, useNavigate } from 'react-router-dom'

// Outlet 渲染子路由元素


import { LaptopOutlined, NotificationOutlined, UserOutlined, PieChartFilled, WindowsOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
const navItems = ['1', '2', '3'].map((key) => ({
  key,
  label: `菜单 ${key}`,
}));

const menItems = [{
  url: '',
  label: '概要',
  icon: LaptopOutlined
},
{
  url: 'product/3?aa=10', // get传参
  label: '认识Hook',
  icon: NotificationOutlined
  },
  {
    url: 'routedesc', // get传参
    label: '路由介绍',
    icon: PieChartFilled
  },
  {
    url: 'reduxdesc', // get传参
    label: 'redux应用',
    icon: WindowsOutlined
  },
  {
    url: 'test',
    label: '检测',
    icon: UserOutlined
  }].map(({icon, label, url}, index) => {
  return {
    key: `sub${index}`,
    icon: React.createElement(icon),
    label: <Link to={url}>{label}</Link>,
  };
});

export default function LayoutCom() { 

  return (
    <div className="page">
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={navItems} />
      </Header>
      <Layout>
        <Sider
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={menItems}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
            >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </div>
  )
}