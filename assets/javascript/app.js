  // waits for the document DOM and other page elements to be ready
  $( window ).on( "load", function() {
  
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBtd_PzE9bJu3o2AMAtw9mQSOt19msBf-w",
      authDomain: "rpsmultiplayer-c13dd.firebaseapp.com",
      databaseURL: "https://rpsmultiplayer-c13dd.firebaseio.com",
      projectId: "rpsmultiplayer-c13dd",
      storageBucket: "rpsmultiplayer-c13dd.appspot.com",
      messagingSenderId: "333743680048",
      appId: "1:333743680048:web:f2dbc42c697ca3d4d7dbf5",
      measurementId: "G-5J7CRVQZ12"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
  });
