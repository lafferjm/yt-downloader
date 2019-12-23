import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const DownloadForm = ({onDownloadClicked, onUrlUpdate, youtubeUrl}) => {
  return (
    <div>
      <TextField
        id="youtube-entry"
        label="YouTube URL"
        variant="outlined"
        fullWidth
        value={youtubeUrl}
        onChange={event => onUrlUpdate(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onDownloadClicked(youtubeUrl)}
      >
        Download
      </Button>
    </div>
  )
}

DownloadForm.propTypes = {
  onDownloadClicked: PropTypes.func.isRequired,
  onUrlUpdate: PropTypes.func.isRequired,
  youtubeUrl: PropTypes.string.isRequired
}

export default DownloadForm;
