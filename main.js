const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

function createWindow() {
    // Crea la ventana del navegador.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    // y carga el  index.html de la aplicación.
    win.loadFile('index.html')
        // eliminar el menú por defecto de Chromium
        //quita menú por defecto de chromium
    win.setMenu(null);
    //para mostrar en la ventana la herramientas de desarrollo de chrome:
    //win.webContents.openDevTools()

}

app.on('ready', createWindow)