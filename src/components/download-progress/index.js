import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const DownloadProgress = ({progress}) => {
  return (
    <div>
      <LinearProgress />
      <Typography align='center' variant='h5'>
        {progress}kb downloaded!
      </Typography>
    </div>
  );
}

DownloadProgress.propTypes = {
  progress: PropTypes.number.isRequired
}

export default DownloadProgress;
