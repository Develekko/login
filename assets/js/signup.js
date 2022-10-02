var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword");
var login = document.querySelector("#login");
var inCorrect = document.querySelector("#incorrect");
var regexError = document.querySelector("#regexError");
var notification = document.querySelector("#notification");
var timer = document.querySelector("#timer");
var users = [];
if(localStorage.getItem("users") != null)
{
  users = JSON.parse(localStorage.getItem("users"));
}

signUp.addEventListener("click", register);
function register()
{
  if(isEmptys())
  {
    inCorrect.innerHTML = 'All inputs is required';
    return true
  }
  var user = {
    name : userName.value,
    email : userEmail.value,
    password : userPassword.value
  }
  if (checkIfEmailExist())
  {
    inCorrect.innerHTML = `An account with email address ( ${userEmail.value} ) already exists`;
    userEmail.classList.add("inputError");
    return true
  }
  else
  {
    if(validation() == true)
    {
      inCorrect.style.display = "none";
      userEmail.classList.remove("inputError");
      users.push(user);
      localStorage.setItem("users",JSON.stringify(users))
      clearInputs();
      notification.classList.add("notification")
      setTimeout(() => {
        window.location="index.html";
      }, 6000)
  
      var timeleft = 4;
      var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          timer.innerHTML = `Success! <i class="fa-regular fa-circle-check "></i>`;
        } else {
          timer.innerHTML = timeleft + " second";
        }
        timeleft -= 1;
      }, 1000);
    }
    else
    {
      regexError.innerHTML = `Invaild Email Address Try : example@domain.com`;
    }

  }
  
}

function isEmptys(){
  if(userName.value == "" || userEmail.value == "" || userPassword.value == "")
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
  userName.value = null;
  userEmail.value = null;
  userPassword.value = null;
}

function checkIfEmailExist()
{
  for (var i = 0; i < users.length; i++) {
    if (userEmail.value == (users[i].email)) {
      return true
    }
  }
}

function validation()
{
  var regex = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/
  if(regex.test(userEmail.value) == true)
  {
    return true;
  }
  else
  {
    return false;
  }
}