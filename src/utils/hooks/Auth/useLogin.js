import { useNavigate } from 'react-router-dom';

import { Constants } from 'commons';
import useMutation from '../useMutaion';
import Storage from 'utils/Storage';

const useLogin = () => {
  const navigate = useNavigate();

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

  return { signIn };
};

export default useLogin;
