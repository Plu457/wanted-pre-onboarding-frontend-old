import { useNavigate } from 'react-router-dom';

import useMutation from 'hooks/useMutaion';
import { Fetch } from 'utils';

const useSignUp = () => {
  const navigate = useNavigate();

  const [signUp] = useMutation(Fetch.signUp, {
    onSuccess: () => {
      navigate('/signin');
    },
  });

  return { signUp };
};

export default useSignUp;
