import React from 'react';
const Home = React.lazy(() => import('../pages/home'));
const Users = React.lazy(() => import('../pages/products'));
const FindProducts = React.lazy(() => import('../pages/FindProducts'));
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
      <React.Suspense fallback={<h1>Loading......</h1>}>
        <Users />
      </React.Suspense>
    ),
    title: 'Users',
    path: '/products',
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<h1>Loading......</h1>}>
        <FindProducts />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/find-products',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense fallback={<h1>Loading......</h1>}>
        <Login />
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/login',
    private: false,
    hidden: false,
  },
];
