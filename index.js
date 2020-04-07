const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: false,
    fullscreen: true,
    kiosk: true
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);
