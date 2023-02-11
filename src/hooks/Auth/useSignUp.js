import { useNavigate } from 'react-router-dom';

import { Constants } from 'commons';
import useMutation from 'hooks/useMutaion';

const fetchSignUp = ({ email, password }) =>
  fetch(`${Constants.BASE_URL}/auth/signUp`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

const useSignUp = () => {
  const navigate = useNavigate();

  const [signUp] = useMutation(fetchSignUp, {
    onSuccess: () => {
      navigate('/signin');
    },
  });

  return { signUp };
};

export default useSignUp;
