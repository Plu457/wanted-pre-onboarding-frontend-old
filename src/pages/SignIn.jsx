import { createRef, useMemo } from 'react';
import { Constants } from 'commons';
import LoginView from 'views/LoginView';
import getValidityErrorMessage from 'utils/getValidityErrorMessage';

const SignIn = () => {
  const inputArray = Array.from({ length: Constants.LoginInputs.length });
  const inputRefs = inputArray.map(() => createRef());
  const formData = useMemo(() => new Map(), []);

  const handleChange = e => {
    const $target = e.target;

    if (!($target instanceof HTMLInputElement)) return;

    const validityErrorMessage = getValidityErrorMessage($target);
    $target.setCustomValidity(validityErrorMessage);
    $target.reportValidity();

    formData.set($target.name, $target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log('formData: >>', Object.fromEntries(formData));
  };

  return <LoginView onSubmit={onSubmit} handleChange={handleChange} inputRefs={inputRefs} />;
};

export default SignIn;
