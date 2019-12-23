import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import DownloadForm from './components/download-form';
import DownloadProgress from './components/download-progress';
import FinishedModal from './components/finished-modal';

const App = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const downloadVideo = youtubeUrl => {
    window.ipcRenderer.send('download-video:start', youtubeUrl);
  }

  useEffect(() => {
    return function cleanup() {
      window.ipcRenderer.removeAllListeners('download-video:start');
    }
  }, []);

  return (
    <div>
      <DownloadForm
        onDownloadClicked={downloadVideo}
        onUrlUpdate={setYoutubeUrl}
        youtubeUrl={youtubeUrl}
      />
      <DownloadProgress />
      <FinishedModal />
    </div>
  )
};

export default hot(module)(App);
