const functions = require('firebase-functions')
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firestore);

const firestoreDB = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.onSaveRecipe = functions.firestore
  .document('recipes/{recipeId}')
  .onCreate((snap, context) => {
    const ref = firestoreDB.collection('recipes').doc(context.params.recipeId);

    return ref.set({
      creationDate: new Date()
    }, {merge: true});
  });
