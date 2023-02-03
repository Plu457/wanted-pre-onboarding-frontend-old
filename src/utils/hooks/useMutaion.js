import { useState } from 'react';
import { Constants } from 'commons';
import Storage from 'utils/Storage';

const useMutation = ({ url, method }) => {
  const [value, setValue] = useState({
    data: undefined,
    isLoading: false,
    errorMessage: undefined,
  });

  const supportedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  const mutation = async data => {
    if (!url || !method) {
      setValue(prev => ({ ...prev, errorMessage: 'url과 메서드가 필요합니다.' }));
      return;
    }
    if (!supportedMethods.includes(method.toUpperCase())) {
      setValue(prev => ({ ...prev, errorMessage: `${method} 메서드는 지원해주지 않습니다.` }));
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
      if (response.message) {
        setValue(prev => ({ ...prev, errorMessage: response.message }));
      }
      setValue(prev => ({ ...prev, data: response }));
    } catch (error) {
      setValue(prev => ({ ...prev, errorMessage: error }));
    } finally {
      setValue(prev => ({ ...prev, isLoading: false }));
    }
  };

  return [mutation, { ...value }];
};

export default useMutation;

// import { useState, useEffect } from 'react';

// const useFetch = (url, options) => {
//   const [fetchState, setFetchValue] = useState({
//     data: undefined,
//     isLoading: false,
//     error: undefined,
//   });

//   const { data, isLoading, error } = fetchState;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setFetchValue(prev => ({ ...prev, isLoading: true }));
//         const response = await fetch(url, options);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data from ${url}. Response status: ${response.status}`);
//         }
//         const json = await response.json();
//         setFetchValue(prev => ({ ...prev, data: json }));
//       } catch (error) {
//         setFetchValue(prev => ({ ...prev, error }));
//       } finally {
//         setFetchValue(prev => ({ ...prev, isLoading: false }));
//       }
//     };

//     fetchData();
//   }, [url, options]);

//   return { data, isLoading, error };
// };

// export default useFetch;
