import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
  HomeOutlined,
  LoginOutlined,
  UserSwitchOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { getItem as getToken } from '../../helpers/storage-actions';
import { useState } from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Sidebar = () => {
  const token = getToken('token');
  const [jwt, setJwt] = useState(token);
  const navigate = useNavigate();
  const items = [
    getItem(
      '',
      'g1',
      <HomeOutlined />,
      [
        getItem('Asosiy sahifa', '/home', <HomeOutlined />),
        jwt && getItem('Mahsulotlar', '/products', <UserSwitchOutlined />),
        jwt &&
          getItem('Qidiruv sahifasi', '/find-products', <SearchOutlined />),
        getItem('Login', '/login', <LoginOutlined />),
      ],
      'group'
    ),
  ];

  const onClick = (e) => {
    navigate(e.keyPath[0]);
  };
  return (
    <>
      <Link to='/home'>
        <img className='logo' src='/logo.svg' alt='Logo' />
      </Link>
      <Menu
        className='sidebar'
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['Home']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        items={items}
      />
    </>
  );
};
export default Sidebar;
