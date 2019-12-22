import React, { useState, useEffect } from 'react';

const DownloadProgress = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    window.ipcRenderer.on('download-video:progress', (event, arg) => {
      setDownloadProgress(arg);
    });

    return function cleanup() {
      window.ipcRenderer.removeAllListeners('download-video:progress');
    }
  }, []);

  return (
    <>
      {
        downloadProgress 
          ? <div>{downloadProgress}kb downloaded!</div>
          : null
      }
    </>
  )

}

export default DownloadProgress;
