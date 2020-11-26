// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  frown, smile, surprise, winkL, winkR;
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

    
if(document.querySelector('#login') !== null){
  document.querySelector('#login').addEventListener('click',sign_in)
  document.querySelector('#sign_out').addEventListener('click',logout)

}
if(document.getElementById('sign_up') !== null){

  document.getElementById('sign_up').addEventListener('click',sign_up);
}

    function sign_up() {
  
     var email = document.querySelector('#email_signup').value;
     var password = document.querySelector('#pass_signup').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(respnse){
        console.log(respnse);
        send(user_name);
    })


  }
  if(document.getElementById('sign_in') !== null){
    document.getElementById('sign_in').addEventListener('click',sign_in)
  }

  function sign_in() {
    var email = document.querySelector('#email_login').value;
    var password = document.querySelector('#pass_login').value;
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
      // [END_EXCLUDE]
    }).then(()=>{
      window.location.reload();

    })

  
  }

  // function authentcation(){
  //   firebase.auth().onAuthStateChanged(function (user) {

  //     if(user){
  //       alert('fine')
      
  //     }else{
  //       alert('not fine')
  //     }
  //   })

  // }
  
  
  if(document.getElementById('logout_button') !== null){

  document.getElementById('logout_button').addEventListener('click',logout);
  }
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
  } else {
      // No user is signed in.
  
    }
  
  }
  
  // when the user sign up set defulte F E in database 
  function send(user_name){
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
  if(document.getElementById('get_radios_value') !== null){
  
  document.getElementById('get_radios_value').addEventListener('click',get_radios_value);
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
function s_end(){
  let userId = firebase.auth().currentUser.uid;
  let get_Data = firebase.database().ref('user/' + userId);

  get_Data.child("frown").on('value', snap => frown = snap.val());
  get_Data.child("smile").on('value', snap => smile = snap.val());
  get_Data.child("surprise").on('value', snap => surprise = snap.val());
  get_Data.child("winkL").on('value', snap => winkL = snap.val());
  get_Data.child("winkR").on('value', snap => winkR = snap.val());


  chrome.runtime.onMessage.addListener(function(request,sender,sendresponse){
    if(request.message==='is_user_signed_in'){
    
        sendresponse({
    message:frown,
    payload:true,
    data:'frown',
    // smile:smile,
    // surprise:surprise,
    // winkL:winkL,
    // winkR:winkR
        });
    }
    return true;
    })
}


