import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'For Rent',
//   amount: 90000,
//   createdAt: 123
// });



// database.ref('notes/-L095zmgl_9tU3c8iybG').update({
//   body: 'Buy Food'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const dataStore = snapshot.val();
//   console.log(`${dataStore.name} is a ${dataStore.job.title} at ${dataStore.job.company}`);
// }, (e) => {
//   console.log('Error', e);
// });
//
// setTimeout(() => {
//     database.ref().update({
//       name: 'Thor',
//       'job/title': 'God',
//       'job/company': 'Asgard'
//     });
//   }, 5000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });
//
//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 5000);
//
//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 10000);
//
//   setTimeout(() => {
//     database.ref('age').set(15);
//   }, 15000);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
//   .catch((e) => {
//   console.log('error', e);
// });

// database.ref().set({
//   name: 'Alan Chow',
//   age: 26,
//   stressLevel: 6,
//   isSingle: true,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Vancouver',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed.', error);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('data removed');
//   }).catch((e) => {
//     console.log('did not remove data', e);
//   });
