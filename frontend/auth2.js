firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document.getElementById('login_button').style.display='none';
      document.getElementById('signup_button').style.display='none';
      document.getElementById('logout_button').style.display='unset';
    } else {
        openLoginForm();
      document.getElementById('login_button').style.display='unset';
      document.getElementById('signup_button').style.display='unset';
      document.getElementById('logout_button').style.display='none';
    }
  });