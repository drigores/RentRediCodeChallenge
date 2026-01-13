const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');
const databaseURL = 'https://rentredi-57402-default-rtdb.firebaseio.com'; 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
});

// Get a database reference
const db = admin.database();
const usersRef = db.ref('users');
module.exports = { admin, db, usersRef };