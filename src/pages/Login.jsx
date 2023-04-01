import React, { useRef } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/product-controls';

const Login = () => {
  const { login } = useContext(ProductContext);
  const _username = useRef('user_task');
  const _password = useRef('user_task');

  const submit = (e) => {
    e.preventDefault();
    login(_username.current.value, _password.current.value);
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={submit}>
        <input
          defaultValue={'user_task'}
          ref={_username}
          type='text'
          placeholder='username'
        />
        <input
          defaultValue={'user_task'}
          ref={_password}
          type='password'
          placeholder='password'
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Login;
