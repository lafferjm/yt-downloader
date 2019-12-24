const { ipcMain, Menu, MenuItem } = require('electron');

ipcMain.on('context-menu:show', (event, arg) => {
  const menu = new Menu();

  menu.append(new MenuItem({
    label: 'Paste',
    role: 'paste'
  }));

  menu.popup();
});
