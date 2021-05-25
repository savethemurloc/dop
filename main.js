const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
// const events = require('events');

// let emitter = new events.EventEmitter();
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    minWidth: 1024,
    maxWidth: 1024,
    height: 768,
    minHeight: 768,
    maxHeight: 768,
    icon: __dirname + "/images/icon.png"
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
})
