importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCVYH1qQOWKgRZDicbvbEq5UOeiD3R0fpA",
  authDomain: "fir-hosting-b0496.firebaseapp.com",
  projectId: "fir-hosting-b0496",
  storageBucket: "fir-hosting-b0496.firebasestorage.app",
  messagingSenderId: "569541812004",
  appId: "1:569541812004:web:3418d0c4b0707563bfddb1",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification?.title || "Background Message";
  const notificationOptions = {
    body: payload.notification?.body || "",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
