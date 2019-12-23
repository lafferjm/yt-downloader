import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const FinishedModal = ({finishedModalOpen, downloadLocation, closeModal}) => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      open={finishedModalOpen}
    >
      <DialogTitle id="download-complete-title">Download Complete</DialogTitle>
      <DialogContent>
        Your song has been downloaded to {downloadLocation}!!!
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => closeModal()}
          color="primary"
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

FinishedModal.propTypes = {
  finishedModalOpen: PropTypes.bool.isRequired,
  downloadLocation: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default FinishedModal;
