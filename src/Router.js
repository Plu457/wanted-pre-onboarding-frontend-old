import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAuthState } from 'context/AuthContext';

import Home from 'pages/Home';
import LoginPage from 'pages/Login';
import SignUpPage from 'pages/SignUp';

const Router = () => {
  const { isLoggedIn } = useAuthState();
  const navigator = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigator('/signin');
    } else {
      navigator('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default Router;
