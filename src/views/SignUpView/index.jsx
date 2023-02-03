import { Link } from 'react-router-dom';

import { Images } from 'commons';
import Input from 'components/Input';

const SignUpView = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <form>
        <div className="p-6 bg-white rounded-md shadow-md w-96">
          <div className="flex items-center justify-center mb-4">
            <img src={Images.LOGO} alt="Logo" className="h-32" />
          </div>
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
          <button
            className="w-full py-2 text-gray-100 transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
            type="submit"
          >
            회원가입
          </button>
          <Link to="/signin">로그인 화면으로 이동</Link>
        </div>
      </form>
    </main>
  );
};

export default SignUpView;
