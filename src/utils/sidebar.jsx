import { Suspense, lazy } from 'react';
import useUniqueId from '../hooks/useId';

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/login'));
const Products = lazy(() => import('../pages/products'));
const FindProducts = lazy(() => import('../pages/find-product'));
const Loader = lazy(() => import('../components/loader'));

export const sidebar = [
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
    ),
    title: 'Products',
    path: '/products',
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<Loader />}>
        <FindProducts />
      </Suspense>
    ),
    title: 'Find Products',
    path: '/find-products',
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
    title: 'Login',
    path: '/login',
    private: false,
    hidden: false,
  },
];
