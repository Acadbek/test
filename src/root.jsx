import viteLogo from '/vite.svg';
import Login from './pages/Login';
import reactLogo from './assets/react.svg';
import { useContext, useState } from 'react';
import { ProductContext } from './context/controls';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  const { login, value } = useContext(ProductContext);
  const handleLogin = () => {
    const data = {
      _username: 'user_task',
      _password: 'user_task',
      _subdomain: 'toko',
    };
    login(data);
  };

  return (
    <div className='app'>
      <Link to='/'>
        <img className='logo' src='/logo.svg' alt='Logo' />
      </Link>
      <Sidebar />
      <Routes>
        <Route path='/users' element={<h1>Users</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        <Route path='/' element={<Navigate to={'/home'} />} />
      </Routes>
    </div>
  );
}

export default App;
