import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const DownloadForm = ({onDownloadClicked, onUrlUpdate, youtubeUrl}) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={9}>
        <TextField
          id="youtube-entry"
          label="YouTube URL"
          variant="outlined"
          fullWidth
          value={youtubeUrl}
          onChange={event => onUrlUpdate(event.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onDownloadClicked(youtubeUrl)}
          size="large"
        >
          Download
        </Button>
      </Grid>
    </Grid>
  )
}

DownloadForm.propTypes = {
  onDownloadClicked: PropTypes.func.isRequired,
  onUrlUpdate: PropTypes.func.isRequired,
  youtubeUrl: PropTypes.string.isRequired
}

export default DownloadForm;
