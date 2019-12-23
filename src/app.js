import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import DownloadForm from './components/download-form';
import DownloadProgress from './components/download-progress';
import FinishedModal from './components/finished-modal';

const App = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showFinishedModal, setShowFinishedModal] = useState(false);
  const [downloadLocation, setDownloadLocation] = useState('');

  const downloadVideo = youtubeUrl => {
    window.ipcRenderer.send('download-video:start', youtubeUrl);
  }

  useEffect(() => {
    window.ipcRenderer.on('download-video:progress', (event, progress) => {
      setDownloadProgress(progress);
    });

    window.ipcRenderer.on('download-video:complete', (event, location) => {
      setDownloadLocation(location);
      setShowFinishedModal(true);
    })

    return function cleanup() {
      window.ipcRenderer.removeAllListeners('download-video:start');
      window.ipcRenderer.removeAllListeners('download-video:progress');
      window.ipcRenderer.removeAllListeners('download-video:complete');
    }
  }, []);

  return (
    <div>
      <DownloadForm
        onDownloadClicked={downloadVideo}
        onUrlUpdate={setYoutubeUrl}
        youtubeUrl={youtubeUrl}
      />
      <DownloadProgress
        progress={downloadProgress}
      />
      <FinishedModal
        finishedModalOpen={showFinishedModal}
        downloadLocation={downloadLocation}
        closeModal={() => setShowFinishedModal(false)}
      />
    </div>
  );
};

export default hot(module)(App);
