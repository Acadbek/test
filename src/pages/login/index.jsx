import { useContext } from 'react';
import { ProductContext } from '../../context/product-controls';
import { Button, Form, Input, message } from 'antd';
import './styles.css';

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { login } = useContext(ProductContext);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: "Tabriklaymiz, siz muvaffaqiyatli ro'yhatdan o'tdingiz!",
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Parol yoki Username xato',
    });
  };

  const onFinish = async (e) => {
    if (e.username === 'user_task' && e.password === 'user_task') {
      success();
      await login(e.username, e.password).then(() => {
        window.location.reload();
      });
    } else error();
  };

  const onFinishFailed = (errorInfo) => {
    return;
  };

  return (
    <div className='login-container'>
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
            <Input className='username-input' />
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
            <Input.Password className='password-input' />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 16,
              span: 0,
            }}
          >
            <Button type='primary' htmlType='submit'>
              Kirish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
