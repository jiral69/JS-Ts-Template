import {app , BrowserWindow} from 'electron';
import './index'; 

let mainWindow: BrowserWindow | null = null;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 820,
        autoHideMenuBar: true, // Hides the default File/Edit top menu bar
        backgroundColor: '#121214',
        webPreferences: {
        nodeIntegration: false,
        contextIsolation: true
    }
  });

    mainWindow.loadURL('http://localhost:3001');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () =>{
    if(process.platform != 'darwin'){
        app.quit();
    }
});


