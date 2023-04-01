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
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    '',
    'g1',
    <HomeOutlined />,
    [
      getItem('Asosiy sahifa', '/home', <HomeOutlined />),
      getItem('Mahsulotlar', '/products', <UserSwitchOutlined />),
      getItem('Qidiruv sahifasi', '/find-products', <SearchOutlined />),
      getItem('Login', '/login', <LoginOutlined />),
    ],
    'group'
  ),
  getItem(
    '',
    'g2',
    null,
    [getItem('Users', 'asd'), getItem('Option 4', '4')],
    'group'
  ),
  getItem('Dependency', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ]),
  {
    type: 'divider',
  },
];
const Sidebar = () => {
  const navigate = useNavigate();

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
