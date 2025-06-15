"use strict";

const path = require("path");
const { app, BrowserWindow } = require("electron");

function main() {
  // create new frameless window with custom size
  const mainWindow = new BrowserWindow({
    width: 520,
    height: 650,
    frame: false, // brak ramki
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // load app/index.html as the window content
  mainWindow.loadFile(path.join("app", "index.html"));
}

app.on("ready", main);

app.on("window-all-closed", function () {
  app.quit();
});
