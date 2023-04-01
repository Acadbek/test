import React from 'react';
const Home = React.lazy(() => import('../pages/home'));
const Users = React.lazy(() => import('../pages/users'));
const FindUser = React.lazy(() => import('../pages/FindUser'));
const Login = React.lazy(() => import('../pages/Login'));
import useUniqueId from '../hooks/useId';

export const sidebar = [
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<h1>Loading..........</h1>}>
        <Home />
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<h1>Loding......</h1>}>
        <Users />
      </React.Suspense>
    ),
    title: 'Users',
    path: '/users',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<h1>Loding......</h1>}>
        <FindUser />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/findUsers',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<h1>Loding......</h1>}>
        <Login />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/login',
    private: false,
    hidden: false,
  },
];
