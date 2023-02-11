import { useNavigate } from 'react-router-dom';

import { Constants } from 'commons';
import { Storage } from 'utils';
import useMutation from 'hooks/useMutaion';

const fetchLogin = ({ email, password }) =>
  fetch(`${Constants.BASE_URL}/auth/signin`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

const useLogin = () => {
  const navigate = useNavigate();

  const [signIn] = useMutation(fetchLogin, {
    onSuccess: res => {
      Storage.setAuthToken({
        name: Constants.AuthTokenName,
        value: res.access_token,
      });
      navigate('/');
      window.location.reload();
    },
  });

  return { signIn };
};

export default useLogin;
