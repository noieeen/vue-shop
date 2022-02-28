const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// //import 'algoliasearch'
// const algoliasearch = require('algoliasearch');

// const ALGOLIA_APP_ID = TKERLQWRD9;
// const ALGOLIA_ADMIN_KEY = fa64a5b85aaf669d84df9bdd81fea852;
// const ALGOLIA_INDEX_NAME = 'product';

// admin.initializeApp(functions.config().firebase);

// exports.addFirestoreDataToAlgolia = functions.https.onRequest((req,res) => {

// });

// var arr = [];

// admin.firestore().collection('products').get().then((docs) => {
//     docs.forEach((doc) => {

//             let product = doc.data();
//             product.objectID = doc.id;

//             arr.push(product);
//     });

//     var client = algoliasearch(ALGOLIA_APP_ID,ALGOLIA_ADMIN_KEY);
//     var index = client.initIndex(ALGOLIA_INDEX_NAME);

//     index.saveObjects(arr, function(err,content){
//         res.status(200).send(content);
//     })

// });


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.Hello = functions.https.onRequest((request, response) => {

//     if(request.method == 'POST'){
//         response.send("Hello: "+request.query.lastname);
//     }else{
//         response.send("Please send post request");
//     }
    
//    });
//    //  vdo 71



