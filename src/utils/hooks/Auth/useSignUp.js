import { useNavigate } from 'react-router-dom';
import useMutation from '../useMutaion';

const useSignUp = () => {
  const navigate = useNavigate();

  const [signUp] = useMutation({
    url: '/auth/signUp',
    method: 'POST',
    onSuccess: () => {
      navigate('/signin');
    },
  });

  return { signUp };
};

export default useSignUp;
