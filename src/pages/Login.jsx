import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { getValidityErrorMessage, Storage } from 'utils';
import useMutation from 'utils/hooks/useMutaion';
import LoginView from 'views/LoginView';
import { Constants } from 'commons';

const LoginPage = () => {
  const navigate = useNavigate();
  const formData = useMemo(() => new Map(), []);
  //TODO: Modal 컴포넌트 만든 뒤 error 메시지를 적용하기 or alert 창으로 표시하기
  const [signIn, { data: signInData, error }] = useMutation({
    url: '/auth/signin',
    method: 'POST',
  });

  const handleChange = e => {
    const $target = e.target;

    const validityErrorMessage = getValidityErrorMessage($target);
    $target.setCustomValidity(validityErrorMessage);
    $target.reportValidity();

    formData.set($target.name, $target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const parsedFormData = Object.fromEntries(formData);

    signIn(parsedFormData);
  };

  useEffect(() => {
    if (signInData && signInData.access_token) {
      Storage.setAuthToken({
        name: Constants.AuthTokenName,
        value: signInData.access_token,
      });
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInData]);

  return <LoginView onSubmit={onSubmit} handleChange={handleChange} />;
};

export default LoginPage;
