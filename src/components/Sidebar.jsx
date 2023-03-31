import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type, link) {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  };
}
const items = [
  getItem('Main Pages', 'sub1', <MailOutlined />, [
    getItem(
      'Menus',
      'g1',
      null,
      [getItem('Login', '/login'), getItem('Home', '')],
      'group',
      'login'
    ),
    getItem(
      'Item 2',
      'g2',
      null,
      [getItem('Users', 'users'), getItem('Option 4', '4')],
      'group'
    ),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem(
    'Group',
    'grp',
    null,
    [getItem('Option 13', '13'), getItem('Option 14', '14')],
    'group'
  ),
];
const Sidebar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e.keyPath[0]);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['Home']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
    />
  );
};
export default Sidebar;
