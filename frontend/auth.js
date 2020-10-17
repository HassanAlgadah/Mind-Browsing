// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyCQ8TcN3rdmUhRLQ46HM23NA6dB9ti5Xwc",
    authDomain: "mind--browsing.firebaseapp.com",
    databaseURL: "https://mind--browsing.firebaseio.com",
    projectId: "mind--browsing",
    storageBucket: "mind--browsing.appspot.com",
    messagingSenderId: "36620434381",
    appId: "1:36620434381:web:16ced778d76cb004c42284",
    measurementId: "G-KZH7VE393T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  function sign_up() {
  
    var email = document.getElementById("email_signup").value;
    var password = document.getElementById("pass_signup").value;
    // id=Math.floor(Math.random() * 100000000000000);
    // firebase.database().ref('user/'+id).set({
    //   User_name:email
      
  
    // });
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(respnse){
        console.log(respnse);
        send();

    })

  }
  function sign_in() {
    var email = document.getElementById("email_login").value;
    var password = document.getElementById("pass_login").value;
   console.log(email,password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      window.alert("errorMessage");
      console.log(error);
      // [END_EXCLUDE]
    });
  
  }
  
  
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document.getElementById('login_button').style.display='none';
      document.getElementById('signup_button').style.display='none';
      document.getElementById('logout_button').style.display='unset';
    } else {
      document.getElementById('login_button').style.display='unset';
      document.getElementById('signup_button').style.display='unset';
      document.getElementById('logout_button').style.display='none';
    }
  });
  // firebase.auth().signOut().then(function () {
  //   // Sign-out successful.
  // }).catch(function (error) {
  //   // An error happened.
  // });
  
  function logout() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      alert('ssssssec');
    }).catch(function (error) {
      // An error happened.
    });
  
  }
  
  function check(){
    var user = firebase.auth().currentUser;
  
    if (user) {
  alert("7loooooooo");
  
  } else {
      // No user is signed in.
  
      alert("z888888888888");
    }
  
  }
  
  
  function send(){
      alert('djd');
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('user/'+userId).set({
      User_name: 'djkhdfh'
      
  
    });
    alert('done');
  }
  
  
  
  
  