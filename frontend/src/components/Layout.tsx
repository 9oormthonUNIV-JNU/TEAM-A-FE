import { Outlet } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

export default function Layout() {
  return (
    <>
      <LoadingScreen />
      <Outlet />
    </>
  );
}
