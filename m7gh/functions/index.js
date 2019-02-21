const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase~~!!");
});

const createRecentActivity = recentActivities => {
  return admin
    .firestore()
    .collection("recentActivities")
    .add(recentActivities)
    .then(doc => console.log("recent added", doc));
};

exports.guideCreated = functions.firestore
  .document("guides/{guideId}")
  .onCreate(doc => {
    //create new notification

    const guide = doc.data();
    //obj
    const recentActivities = {
      content: "Added a new guide",
      user: `${guide.authorFirstName} ${guide.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createRecentActivity(recentActivities);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const newActivity = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createRecentActivity(newActivity);
    });
});
