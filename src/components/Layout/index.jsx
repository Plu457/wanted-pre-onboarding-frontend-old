import { useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const hasToken = pathname === '/' && true;

  return (
    <>
      {hasToken ? <Header /> : ''}
      <main className="flex items-center justify-center h-screen bg-gray-100">{children}</main>
    </>
  );
};

export default Layout;
