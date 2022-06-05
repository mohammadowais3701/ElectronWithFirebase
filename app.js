const { ipcRenderer,app, BrowserWindow,ipcMain } = require('electron')
const {connectFirebase} = require('./Firebase_connection') 
const { getFirestore} = require('firebase-admin/firestore');
const path = require('path')
let win;
let db;
let coll=[];
process.env.NODE_ENV="production";
const createWindow = () => {
     win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation:false,
        nodeIntegration:true
      }
    })
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    connectFirebase() 
    connectFirebase() 
    createWindow()

    db = getFirestore();
    db.collection('SessionRecipes').get().then((docs)=>{
      
      docs.forEach((doc) => {
       // console.log(doc.data());
            coll.push({id:doc.id,data:doc.data()})
      })
      win.webContents.send('item',coll)
    })

    // ipcMain.on('item',function(e,item){
    //   win.webContents.send('item',item)
    // })
    
    
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()

    })

    

  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  