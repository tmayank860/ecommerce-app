import React from 'react';
import App from './App';
import { ApiProvider } from './api/apiContext';

const Root = () => {
  return (
    <ApiProvider>
      <App />
    </ApiProvider>
  );
};

export default Root;
