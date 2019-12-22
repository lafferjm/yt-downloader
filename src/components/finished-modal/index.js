import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const FinishedModal = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [downloadLocation, setDownloadLocation] = useState('');

  useEffect(() => {
    window.ipcRenderer.on('download-video:complete', (event, arg) => {
      setDownloadLocation(arg);
      setDialogOpen(true);
    });

    return function cleanup() {
      window.ipcRenderer.removeAllListeners('download-video:complete');
    }
  });

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      open={dialogOpen}
    >
      <DialogTitle id="download-complete-title">Download Complete</DialogTitle>
      <DialogContent>
        Your song has been downloaded to {downloadLocation}!!!
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setDialogOpen(false)}
          color="primary"
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FinishedModal;
