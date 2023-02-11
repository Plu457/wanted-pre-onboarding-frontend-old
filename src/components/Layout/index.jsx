import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">{children}</main>
    </>
  );
};

export default Layout;
