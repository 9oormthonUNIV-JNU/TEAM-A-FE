import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import AuthLayout from './components/Auth/AuthLayout';
import Signup from './pages/Signup';
import SignupComplete from './components/Auth/SignupComplete';
import SearchPassword from './components/Auth/SearchPassword';
import CategoryProducts from './pages/CategoryProducts';
import { logoutAction } from './utils/actions';
import { checkAuthLoader, getAuthToken } from './utils/tokenHandler';
import ProductDetails from './pages/ProductDetails';
import NotFound from './components/NotFound';
import CreateFunding from './pages/CreateFunding';
import ChangePassword from './components/Auth/ChangePassword';
// import { categoryLoader, detailsLoader } from './utils/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    id: 'root',
    loader: getAuthToken,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/category/:categoryId',
        element: <CategoryProducts />,
        // loader: categoryLoader,
      },
      {
        path: '/products/:productId',
        element: <ProductDetails />,
        // loader: detailsLoader,
      },
      {
        path: '/create-funding',
        element: <CreateFunding />,
        loader: checkAuthLoader,
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
      {
        path: 'change-password',
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: '/logout',
    action: logoutAction,
  },
]);

export default router;
