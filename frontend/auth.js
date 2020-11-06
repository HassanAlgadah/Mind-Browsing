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
    var user_name = document.getElementById("user_name").value;

    // id=Math.floor(Math.random() * 100000000000000);
    // firebase.database().ref('user/'+id).set({
    //   User_name:email
      
  
    // });
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(respnse){
        console.log(respnse);
        send(user_name);

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
  
  

  // firebase.auth().signOut().then(function () {
  //   // Sign-out successful.
  // }).catch(function (error) {
  //   // An error happened.
  // });
  
  function logout() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  
  }
  
  function check(){
    var user = firebase.auth().currentUser;
  
    if (user) {
  alert('nice')
  } else {
      // No user is signed in.
  
    }
  
  }
  
  // when the user sign up set defulte F E in database 
  function send(user_name){
      alert('djd');
    var userId = firebase.auth().currentUser.uid;
    var email = firebase.auth().currentUser.email;
    firebase.database().ref('user/'+userId).set({
        email:email,
        User_name: user_name,
        surprise:'tab',
        frown:'page_down',
        smile:'enter',
        winkR:'refresh',
        winkL:'back_page'
  
    });
    alert('done');
  }



  function update_facial(Surprise,Frown,Smile,Blink_Right,Blink_Left){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('user/'+userId).update({
        surprise:Surprise,
        frown:Frown,
        smile:Smile,
        winkR:Blink_Right,
        winkL:Blink_Left
  
    });

alert('Done')

  }

function get_radios_value(){
  var Surprise;
  var Frown;
  var Smile;
  var Blink_Right;
  var Blink_Left;


var facial=document.getElementsByName('facial');
var facial1=document.getElementsByName('facial1');
var facial2=document.getElementsByName('facial2');
var facial3=document.getElementsByName('facial3');
var facial4=document.getElementsByName('facial4');


for (var i = 0; i <  facial.length; i++) {
  if (facial[i].checked) {
    Surprise=facial[i].value;
    break;
  }
}

for (var i = 0; i <  facial1.length; i++) {
    if (facial1[i].checked) {
      Frown=facial1[i].value;
      break;
    }
  }
  for (var i = 0; i <  facial2.length; i++) {
    if (facial2[i].checked) {
      Smile= facial2[i].value;
      break;
    }
  }
  for (var i = 0; i <  facial3.length; i++) {
    if (facial3[i].checked) {
      Blink_Right=facial3[i].value;
      break;
    }
  }
  for (var i = 0; i <  facial4.length; i++) {
    if (facial4[i].checked) {
      Blink_Left=facial4[i].value;
      break;
    }
  }
  update_facial(Surprise,Frown,Smile,Blink_Right,Blink_Left);
  z.push(Surprise);
  alert(z[0]);
  
}


