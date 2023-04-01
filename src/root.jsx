import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { ProductContext } from './context/controls';
import { useContext, useState } from 'react';
import Home from './pages/home';
import Login from './pages/Login';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import viteLogo from '/vite.svg';
import NotFound from './pages/404';
import reactLogo from './assets/react.svg';
import FindUser from './pages/FindUser';

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
    <>
      <Navbar />
      <main className='main-wrapper'>
        <Sidebar />
        <div className='container'>
          <Routes>
            <Route path='/users' element={<h1>Users</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/findUsers' element={<FindUser />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
