import { Link } from 'react-router-dom';

import { Images } from 'commons';
import Input from 'components/Input';

const LoginView = ({ onSubmit, handleChange }) => {
  return (
    <form onSubmit={onSubmit} onChange={handleChange}>
      <div className="p-6 bg-white rounded-md shadow-md w-96">
        <div className="flex items-center justify-center mb-4">
          <img src={Images.LOGO} alt="Logo" className="h-32" />
        </div>
        <Input
          name="email"
          type="email"
          label="Email"
          pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          data-testid="email-input"
          autoComplete="off"
          required
        />
        <Input
          name="password"
          type="password"
          label="Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          data-testid="password-input"
          required
        />
        <button
          className="w-full py-2 text-gray-100 transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
          data-testid="signin-button"
        >
          로그인
        </button>
        <Link to="/signup">회원가입 하기</Link>
      </div>
    </form>
  );
};

export default LoginView;
