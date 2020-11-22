firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document.getElementById('login_button').style.visibility = "hidden"
      document.getElementById('signup_button').style.visibility='hidden';
      document.getElementById('logout_button').style.visibility='visible';
    } else {
      openLoginForm();
      document.getElementById('login_button').style.visibility='visible';
      document.getElementById('signup_button').style.visibility='visible';
      document.getElementById('logout_button').style.visibility='hidden';
    }
  });