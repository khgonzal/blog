import React from 'react';

export function callApi(endpoint: string, method: string, body?: string) {
  const api = process.env.REACT_APP_DEV_ENV;
  fetch(`${api}/${endpoint}`, {
    method,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  }).then((data) => {
    return data.json();
  });
}
