import React from 'react';
import { hot } from 'react-hot-loader';
import DownloadForm from './components/download-form';
import DownloadProgress from './components/download-progress';
import FinishedModal from './components/finished-modal';

function App() {
  return (
    <>
      <DownloadForm />
      <DownloadProgress />
      <FinishedModal />
    </>
  )
};

export default hot(module)(App);
