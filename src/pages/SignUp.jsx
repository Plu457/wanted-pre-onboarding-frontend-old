import { useMemo } from 'react';

import { useSignUp } from 'utils/hooks';
import { getValidityErrorMessage } from 'utils';
import SignUpView from 'views/SignUpView';

const SignUpPage = () => {
  const { signUp } = useSignUp();
  const formData = useMemo(() => new Map(), []);

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
