import { useMemo } from 'react';
import { getValidityErrorMessage } from 'utils';
import { useLogin } from 'hooks';
import LoginView from 'views/LoginView';

const LoginPage = () => {
  const { signIn } = useLogin();
  const formData = useMemo(() => new Map(), []);

  const handleChange = ({ target }) => {
    const validityErrorMessage = getValidityErrorMessage(target);
    target.setCustomValidity(validityErrorMessage);
    target.reportValidity();

    formData.set(target.name, target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const parsedFormData = Object.fromEntries(formData);

    signIn(parsedFormData);
  };

  return <LoginView onSubmit={onSubmit} handleChange={handleChange} />;
};

export default LoginPage;
