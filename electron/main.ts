import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

const isDev = require('electron-is-dev');
console.log('isdev', JSON.stringify(isDev));

async function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
    },
  });

  // and load the index.html of the app.
  const url = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'index.html')}`;
  await mainWindow.loadURL(url);

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  let counter = 1;
  setInterval(() => mainWindow.webContents.send('counter', counter++), 1000);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
(async () => {
  await app.whenReady();
  await createWindow();

  app.on('activate', async function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      await createWindow();
    }
  });
})()
  .then(() => {})
  .catch((reason) => console.error(reason));

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.handle('ping', () => 'pong');
