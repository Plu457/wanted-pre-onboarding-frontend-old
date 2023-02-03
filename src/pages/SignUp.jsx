import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Constants } from 'commons';
import { getValidityErrorMessage, Storage } from 'utils';
import useMutation from 'utils/hooks/useMutaion';
import SignUpView from 'views/SignUpView';

const SignIn = () => {
  const navigate = useNavigate();
  const loginData = useMemo(() => new Map(), []);

  //TODO: Modal 컴포넌트 만든 뒤 error 메시지를 적용하기
  const [signUp, { data: signUpData, errorMessage }] = useMutation({
    url: '/auth/signup',
    method: 'POST',
  });

  const handleChange = e => {
    const $target = e.target;

    if (!($target instanceof HTMLInputElement)) return;

    const validityErrorMessage = getValidityErrorMessage($target);
    $target.setCustomValidity(validityErrorMessage);
    $target.reportValidity();

    loginData.set($target.name, $target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    signUp(Object.fromEntries(loginData));
  };

  useEffect(() => {
    if (signUpData && signUpData.access_token) {
      Storage.setAuthToken({
        name: Constants.AuthTokenName,
        value: signUpData.access_token,
      });
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpData]);

  return <SignUpView onSubmit={onSubmit} handleChange={handleChange} />;
};

export default SignIn;
