const {ipcRenderer} = require('electron');

function sendForm(event) {
    let url = document.getElementById('youtubeUrl').value;
    ipcRenderer.send('form-submission', url);
};
