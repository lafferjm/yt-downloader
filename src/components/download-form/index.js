import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const DownloadForm = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');

  function DownloadVideo() {
    console.log(youtubeUrl);
    window.ipcRenderer.send('download-video:start', youtubeUrl);
  }

  return (
    <div>
      <TextField
        id="youtube-entry"
        label="YouTube URL"
        variant="outlined"
        fullWidth
        value={youtubeUrl}
        onChange={event => setYoutubeUrl(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={DownloadVideo}
      >
        Download
      </Button>
    </div>
  )
}

export default DownloadForm;
