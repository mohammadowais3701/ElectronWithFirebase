const {ipcRenderer,ipcMain} = require('electron')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./credentials/sessionreceipes-firebase-adminsdk.json');
let coll=[];
async function connectFirebase() {
initializeApp({
        credential: cert(serviceAccount)
      });
  //db = getFirestore();
 //const docs = await db.collection('SessionRecipes').get();

//  docs.forEach((doc) => {
//    coll.push(doc.data())
//   //  let data=JSON.parse(JSON.stringify(doc.data()),(key,value)=>{
//   //      if(JSON.stringify(value).includes("http")){
//   //             coll.push(value)}
//   //  });
//  });
 //console.log(coll)
 //ipcRenderer.send("item",coll)
 
}


module.exports ={connectFirebase}


