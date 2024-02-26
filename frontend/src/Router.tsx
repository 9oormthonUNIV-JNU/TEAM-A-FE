import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import AuthLayout from './components/Auth/AuthLayout';
import Signup from './pages/Signup';
import SignupComplete from './components/Auth/SignupComplete';
import SearchPassword from './components/Auth/SearchPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signup-complete',
        element: <SignupComplete />,
      },
      {
        path: 'search-password',
        element: <SearchPassword />,
      },
    ],
  },
]);

export default router;
