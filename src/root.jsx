import { useContext } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { ProductContext } from './context/product-controls';
import { sidebar } from './utils/sidebar';
import Home from './pages/home';
import Login from './pages/Login';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import FindUser from './pages/FindProducts';
import NotFound from './pages/404';
import viteLogo from '/vite.svg';

function App() {
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
