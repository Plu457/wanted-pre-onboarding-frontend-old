import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { getValidityErrorMessage, Storage } from 'utils';
import useMutation from 'utils/hooks/useMutaion';
import LoginView from 'views/LoginView';
import { Constants } from 'commons';

const LoginPage = () => {
  const navigate = useNavigate();
  const formData = useMemo(() => new Map(), []);

  const [signIn] = useMutation({
    url: '/auth/signin',
    method: 'POST',
    onSuccess: res => {
      Storage.setAuthToken({
        name: Constants.AuthTokenName,
        value: res.access_token,
      });
      navigate('/');
    },
  });

  const handleChange = e => {
    const $target = e.target;

    const validityErrorMessage = getValidityErrorMessage($target);
    $target.setCustomValidity(validityErrorMessage);
    $target.reportValidity();

    formData.set($target.name, $target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const parsedFormData = Object.fromEntries(formData);

    signIn(parsedFormData);
  };

  return <LoginView onSubmit={onSubmit} handleChange={handleChange} />;
};

export default LoginPage;
