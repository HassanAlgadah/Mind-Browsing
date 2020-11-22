document.getElementById('login_button').addEventListener('click',openLoginForm);

function openLoginForm(){
  document.body.classList.add("showLoginForm");
}
document.getElementById('popupclose').addEventListener('click',closeLoginForm);
function closeLoginForm(){
  document.body.classList.remove("showLoginForm");
}
