import { BreadCrumb, Dashboard, Nav } from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ImportOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { ProductContext } from '../../context/controls';

const Navbar = () => {
  const { changeSidebarStatus } = useContext(ProductContext);
  const location = useLocation();

  const getLocation = () => {
    if (location.pathname === '/home') return 'Asosiy sahifa';
    if (location.pathname === '/findUsers') return 'Qidiruv sahifasi';
    if (location.pathname === '/users') return 'Foydalanuvchilar';
    if (location.pathname === '/login') return "Ro'yhatdan o'tish";
  };
  return (
    <Nav className='nav'>
      <ImportOutlined onClick={() => changeSidebarStatus(true)} />
      <BreadCrumb>
        <Dashboard>
          Dashboard <span>/</span>{' '}
        </Dashboard>
        <span>{getLocation()}</span>
      </BreadCrumb>
    </Nav>
  );
};

export default Navbar;
