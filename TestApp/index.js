'use strict';

// index.js (main process)
// - GUI (rendere process)
// - GUI (rendere process)
// - GUI (rendere process)

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', function() {
  // create window
  mainWindow = new BrowserWindow({width: 600, height: 400});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
