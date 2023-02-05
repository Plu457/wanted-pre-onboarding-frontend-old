import { useState } from 'react';
import { Constants } from 'commons';
import { Storage } from 'utils';

const useMutation = ({ url, method, onSuccess, onError }) => {
  const [value, setValue] = useState({
    data: undefined,
    isLoading: false,
    error: undefined,
  });

  const { data, isLoading, error } = value;

  const supportedMethods = ['POST', 'PUT', 'DELETE'];

  const mutation = async data => {
    if (!url || !method) {
      setValue(prev => ({ ...prev, error: 'url과 메서드가 필요합니다.' }));
      return;
    }
    if (!supportedMethods.includes(method.toUpperCase())) {
      setValue(prev => ({ ...prev, error: `${method} 메서드는 지원해주지 않습니다.` }));
      return;
    }

    try {
      const token = Storage.getAuthToken({ name: Constants.AuthTokenName });
      setValue(prev => ({ ...prev, isLoading: true }));

      const URL = `${Constants.BASE_URL}${url}`;

      const response = await (
        await fetch(URL, {
          method: method.toUpperCase(),
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token || null}`,
          },
        })
      ).json();
      setValue(prev => ({ ...prev, data: response }));

      if (onSuccess) onSuccess(response);
    } catch (error) {
      setValue(prev => ({ ...prev, error }));
      if (onError) onError(error);
    } finally {
      setValue(prev => ({ ...prev, isLoading: false }));
    }
  };

  return [mutation, { data, isLoading, error, isError: error !== null }];
};

export default useMutation;
