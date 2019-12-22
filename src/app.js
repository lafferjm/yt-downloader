import React from 'react';
import { hot } from 'react-hot-loader';
import DownloadForm from './components/download-form';
import DownloadProgress from './components/download-progress';

function App() {
  return (
    <>
      <DownloadForm />
      <DownloadProgress />
    </>
  )
};

export default hot(module)(App);
