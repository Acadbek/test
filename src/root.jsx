import { sidebar } from './utils/sidebar';
import { getItem } from './helpers/storage-actions';
import { useContext, useEffect } from 'react';
import { ProductContext } from './context/product-controls';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import FindUser from './pages/find-product';
import NotFound from './pages/404';
import viteLogo from '/vite.svg';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = getItem('token');

  // If the user is not registered and wants to enter pages
  // without access, it will send to the login page
  useEffect(() => {
    !token && location.pathname === '/products' ? navigate('/login') : '';
    !token && location.pathname === '/find-products' ? navigate('/login') : '';
  }, [location.pathname]);

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
