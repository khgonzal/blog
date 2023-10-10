import React, { useState } from 'react';

const api = process.env.REACT_APP_DEV_ENV;

const useCallApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (endpoint: string, method: string, body?: {}) => {
    setLoading(true);
    try {
      const response = await fetch(`${api}/${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...body && { body: JSON.stringify(body) },
      });
      const json = await response.json();
      return json;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, callApi };
};

export { useCallApi };
