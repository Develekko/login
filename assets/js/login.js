var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword");
var login = document.querySelector("#login");
var inCorrect = document.querySelector("#incorrect");
var users = [];
if(localStorage.getItem("users") != null)
{
  users = JSON.parse(localStorage.getItem("users"));
}
else
{
   users = [];
   var user = {
    name : null,
    email : null,
    password : null
  }
  users.push(user)
}
login.addEventListener("click", log)
function log ()
{
  if(isEmpty())
  {
    inCorrect.innerHTML = '*All inputs is required*';
    inCorrect.classList.add("animate__animated","animate__flash");
    return true;
  }
  var email = userEmail.value;
  var password = userPassword.value;

    for(var i = 0 ; i<users.length ; i++)
    {
      if 
      (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password == password){
      localStorage.setItem('activeSession', users[i].name)
      window.location="home.html";
      inCorrect.style.display = "none";
      clearInputs();
      }
      else
      {
        inCorrect.innerHTML = 'Incorrect Email or Password';
        inCorrect.classList.add("animate__animated","animate__flash");
      }
    }
}
function isEmpty(){
  if(userEmail.value == "" || userPassword.value == "")
  {
    return true
  }
  else
  {
    return false
  }
}
function clearInputs()
{
  userEmail.value = null;
  userPassword.value = null;
}







//From https://tobiasahlin.com/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 1000 + 30 * i})










