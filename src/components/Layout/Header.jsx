import { Constants } from 'commons';
import { useAuthState } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Storage } from 'utils';

const Header = () => {
  const navigate = useNavigate();
  const { setIsAuthorized } = useAuthState();

  const onLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      Storage.deleteAuthToken({ name: Constants.AuthTokenName });
      setIsAuthorized(false);
      navigate('/signin');
      window.location.reload();
    }
  };

  return (
    <header className="fixed z-20 bg-white w-screen">
      <div className="flex flex-row justify-between max-w-4xl p-4 h-15 mx-auto">
        <h1 className="text-2xl font-bold cursor-pointer select-none">TODO LIST</h1>
        <button className="p-1 rounded-lg hover:bg-gray-200" onClick={onLogout}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
