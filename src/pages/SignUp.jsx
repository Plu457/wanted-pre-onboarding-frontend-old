import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { getValidityErrorMessage } from 'utils';
import useMutation from 'utils/hooks/useMutaion';
import SignUpView from 'views/SignUpView';

const SignUpPage = () => {
  const navigate = useNavigate();
  const formData = useMemo(() => new Map(), []);

  const [signUp] = useMutation({
    url: '/auth/signUp',
    method: 'POST',
    onSuccess: () => {
      navigate('/signin');
    },
  });

  const handleChange = e => {
    const $target = e.target;

    if (!($target instanceof HTMLInputElement)) return;

    const validityErrorMessage = getValidityErrorMessage($target);
    $target.setCustomValidity(validityErrorMessage);
    $target.reportValidity();

    formData.set($target.name, $target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const parsedFormData = Object.fromEntries(formData);

    signUp(parsedFormData);
  };

  return <SignUpView onSubmit={onSubmit} handleChange={handleChange} />;
};

export default SignUpPage;
