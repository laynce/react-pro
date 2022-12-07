import React from 'react'
import {useNavigate} from 'react-router-dom'

import { Button, Card, Form, Input } from 'antd'

export default function LoginCom() {
  const navigate = useNavigate()
  
  const onFinish = () => {
    navigate('/page')
  }

  return (
    <Card className='login-form'>
      <Form
        name="login"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入!',
            },
          ]}
        >
          <Input placeholder='请输入'/>
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入!',
            },
          ]}
        >
          <Input.Password placeholder='请输入'/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          
          <Button type="primary" htmlType="submit" className='mr-5'>
            提交
          </Button>
          <Button>重置</Button>
        </Form.Item>
      </Form>
    </Card>
  )
} 

