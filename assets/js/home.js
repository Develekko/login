
var userHello = document.querySelector("#userHello");
var userLogout = document.querySelector("#logout");
var timer = document.querySelector("#timer");

if(localStorage.getItem("activeSession") != null)
{
  var username = localStorage.getItem('activeSession')
}
else
{
  window.location="index.html";
}

if (username) {
  userHello.innerHTML = username
}

userLogout.addEventListener("click", logout)
function logout() {
  localStorage.removeItem('activeSession');
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
    duration: 1500,
    delay: (el, i) => 1000 + 30 * i})






















