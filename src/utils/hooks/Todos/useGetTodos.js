import { useFetch } from 'utils/hooks';
import { Storage } from 'utils';
import { Constants } from 'commons';

const useGetTodos = () => {
  const URL = '/todos';
  const accessToken = Storage.getAuthToken({ name: Constants.AuthTokenName });
  const isValidToken = !['undefined', null, ''].includes(accessToken);

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return useFetch(URL, options, isValidToken);
};

export default useGetTodos;
