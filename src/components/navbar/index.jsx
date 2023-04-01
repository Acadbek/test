import './styles.css';
import { Link, useLocation } from 'react-router-dom';
import { ImportOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { ProductContext } from '../../context/product-controls';

const Navbar = () => {
  const { changeSidebarStatus } = useContext(ProductContext);
  const location = useLocation();

  const getLocation = () => {
    if (location.pathname === '/home') return 'Asosiy sahifa';
    if (location.pathname === '/find-products') return 'Qidiruv sahifasi';
    if (location.pathname === '/products') return 'Mahsulotlar';
    if (location.pathname === '/login') return "Ro'yhatdan o'tish";
  };
  return (
    <div className='nav'>
      <ImportOutlined
        className='changerBtn'
        onClick={() => changeSidebarStatus(true)}
      />
      <div className='breadcrumb'>
        <div className='dashboard'>
          Dashboard<span>/</span>
        </div>
        <span>{getLocation()}</span>
      </div>
    </div>
  );
};

export default Navbar;
