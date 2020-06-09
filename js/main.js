var button = document.querySelector(".nav__toggler");
var navList = document.querySelector(".nav__list");
var mobileOverlay = document.querySelector(".mobile-overlay");

button.addEventListener('click', toggleNav);

function toggleNav() {
    // var listOfClasses = navList.classList;
    // console.log (listOfClasses)
    // if (listOfClasses.contains("open")){
    // }//     navList.classList.remove('open');
    // else {
    //     navList.classList.add('open');
    // }
    //     navList.classList.remove('open');

    mobileOverlay.classList.toggle('open');
  }