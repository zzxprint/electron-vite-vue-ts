const { app, BrowserWindow } = require('electron');
const { join } = require('path');
const NODE_ENV = process.env.NODE_ENV;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (NODE_ENV === 'development') {
    win.loadURL(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
    win.webContents.openDevTools()
  } else {
    win.loadFile(join(__dirname, '../dist/index.html'));
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
