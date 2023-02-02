import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAuthState } from 'context/LoginContext';

import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

const Router = () => {
  const { isLoggedIn } = useAuthState();
  const navigator = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigator('/signin');
    } else {
      navigator('/');
    }
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
