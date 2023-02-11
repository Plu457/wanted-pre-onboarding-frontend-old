import { useFetch } from 'hooks';
import { Storage } from 'utils';
import { Constants } from 'commons';

const useGetTodos = () => {
  const URL = '/todos';
  const accessToken = Storage.getAuthToken({ name: Constants.AuthTokenName });

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return useFetch(URL, options);
};

export default useGetTodos;
