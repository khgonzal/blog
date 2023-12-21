import { useState } from 'react';

const api = process.env.REACT_APP_DEV_ENV;

const useCallApi = () => {
  try {
    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const callApi = async (endpoint: string, method: string, body?: {}, headers?: {}) => {
      setLoading(true);
      console.log(endpoint, 'endpoint')
      try {
        const response = await fetch(`${api}/${endpoint}`, {
          method,
          headers: headers ?? {
            'Content-Type': 'application/json',
          },
          ...body && { body: JSON.stringify(body) },
        });
        setData(true)
        const json = await response.json();
        return json;
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    return { data, loading, error, callApi };
  } catch (err: any) {
    throw new Error(err.message)
  }

};

export { useCallApi };
