import React from 'react';
import PropTypes from 'prop-types';

const DownloadProgress = ({progress}) => {
  return (
    <>
      {
        progress 
          ? <div>{progress}kb downloaded!</div>
          : null
      }
    </>
  );
}

DownloadProgress.propTypes = {
  progress: PropTypes.number.isRequired
}

export default DownloadProgress;
