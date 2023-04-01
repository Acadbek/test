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
import { Container } from './styles';
import { Logo } from './styles';
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
      getItem('Foydalanuvchilar', '/users', <UserSwitchOutlined />),
      getItem('Qidiruv sahifasi', '/findUsers', <SearchOutlined />),
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
    <Container>
      <Link to='/home'>
        <Logo className='logo' src='/logo.svg' alt='Logo' />
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
    </Container>
  );
};
export default Sidebar;
