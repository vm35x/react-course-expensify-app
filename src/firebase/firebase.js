import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763
// })

// database.ref("notes").push({
//       title: "Another note",
//       body: "React, Angular, Node etc"
// });

// database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//     const val = snapshot.val();
//     const name = val.name;
//     const job = val.job;
//     console.log(`${name}  working at ${job}`);
//   },
//   e => {
//     console.log("error is ", e);
//   }
// );

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// database.ref().set({
//   name: "Lorem Ipsum",
//   age: 44,
//   address: {
//     street: 'Main.st',
//     apt: 310
//   },
//   job: 'construction',
//   location: {
//     city: "Tampa",
//     country: "United States"
//   }
// }).then((resolve, reject) => {
// console.log("data was saved")
// }).catch((error) => {
// console.log(error)
// })

// database.ref()
// .update({
//   job: "IT",
//   'address/apt': 1000,
//   'location/city': 'St Petersburg'
// })
// .then(() => {
//   console.log('data was updated...')
// })
// .catch((error) => {
//   console.log(error)
// })

// database.ref('isSingle')
// .set(null)
// .then(() => {
//   console.log('removed')
// })
// .catch((error) => {
//   console.log(error)
// })

// database.ref()
// .remove()
// .then(() => {
//   console.log('removed')
// })
// .catch((error) => {
//   console.log(error)
// })
