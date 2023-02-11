import { useNavigate } from 'react-router-dom';

import { Constants } from 'commons';
import useMutation from 'hooks/useMutaion';
import { Fetch, Storage } from 'utils';

const useLogin = () => {
  const navigate = useNavigate();

  const [signIn] = useMutation(Fetch.login, {
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
