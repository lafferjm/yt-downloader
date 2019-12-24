import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import Grid from '@material-ui/core/Grid';
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

  const closeModal = () => {
    setShowFinishedModal(false);
    setDownloadProgress(0);
    setYoutubeUrl('');
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
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DownloadForm
            onDownloadClicked={downloadVideo}
            onUrlUpdate={setYoutubeUrl}
            youtubeUrl={youtubeUrl}
          />
        </Grid>
        <Grid item xs={12}>
          {
            downloadProgress
            ? <DownloadProgress progress={downloadProgress} />
            : null
          }
        </Grid>    
      </Grid>
      <FinishedModal
        finishedModalOpen={showFinishedModal}
        downloadLocation={downloadLocation}
        closeModal={closeModal}
      />
    </>
  );
};

export default hot(module)(App);
