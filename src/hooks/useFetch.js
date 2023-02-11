import { useState, useEffect } from 'react';
import { Constants } from 'commons';

const useFetch = (url, options) => {
  const [fetchState, setFetchValue] = useState({
    data: undefined,
    isLoading: false,
    error: undefined,
  });

  const { data, isLoading, error } = fetchState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchValue(prev => ({ ...prev, isLoading: true }));
        const response = await fetch(`${Constants.BASE_URL}${url}`, options);
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}. Response status: ${response.status}`);
        }
        const json = await response.json();
        setFetchValue(prev => ({ ...prev, data: json }));
      } catch (error) {
        setFetchValue(prev => ({ ...prev, error }));
      } finally {
        setFetchValue(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, isLoading, error, isError: error !== null };
};

export default useFetch;
