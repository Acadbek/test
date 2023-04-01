import { useContext, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { ProductContext } from './context/controls';
import { sidebar } from './utils/sidebar';
import Home from './pages/home';
import Login from './pages/Login';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import FindUser from './pages/FindProducts';
import NotFound from './pages/404';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  console.log(sidebar);
  const { login } = useContext(ProductContext);
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
            {sidebar.map(({ path, element, id }) => (
              <Route key={id} path={path} element={element} />
            ))}
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
