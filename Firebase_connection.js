const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
let db;
const serviceAccount = require('./credentials/sessionreceipes-firebase-adminsdk.json');
async function connectFirebase() {
initializeApp({
        credential: cert(serviceAccount)
      });
 db = getFirestore();
 const docs = await db.collection('SessionRecipes').get();
 docs.forEach((doc) => {
   let data=JSON.parse(JSON.stringify(doc.data()),(key,value)=>{
       if(JSON.stringify(value).includes("http"))
              console.log("myvalue",value);
   });
 });
}
module.exports ={connectFirebase,db}


