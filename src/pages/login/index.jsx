import { useRef, useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../context/product-controls';
import { getItem } from '../../helpers/storage-actions';
import { Button, Checkbox, Form, Input, message, Space } from 'antd';
import './styles.css';

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { login, errors } = useContext(ProductContext);
  const token = getItem('token');

  const success = () => {
    messageApi.open({
      type: 'success',
      content: "Tabriklaymiz siz muvaffaqiyatli ro'yhatdan o'tdingiz!",
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Parol yoki Username xato',
    });
  };

  const onFinish = async (e) => {
    login(e.username, e.password);
    if (e.username === 'user_task' && e.password === 'user_task') {
      success();
    } else {
      error();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className='login-title'>
        <h4>Login</h4>
      </div>
      <div className='main-login'>
        {contextHolder}
        <Form
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Usernameni kiriting',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Parolni kiriting',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 21,
              span: 0,
            }}
          >
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
