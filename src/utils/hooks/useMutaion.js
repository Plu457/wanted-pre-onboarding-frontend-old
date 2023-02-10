import { useState } from 'react';

const useMutation = (fetchAPI, { onSuccess, onError }) => {
  const [value, setValue] = useState({
    data: undefined,
    isLoading: false,
    error: undefined,
  });

  const { data, isLoading, error } = value;

  const mutation = async data => {
    try {
      setValue(prev => ({ ...prev, isLoading: true }));

      // const response = await (await fetchAPI(data)).json();
      const response = await fetchAPI(data);
      if (response.status === 204) {
        if (onSuccess) onSuccess(data);
        return;
      }

      const responseData = await response.json();
      setValue(prev => ({ ...prev, data: responseData }));

      if (onSuccess) onSuccess(responseData);
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
