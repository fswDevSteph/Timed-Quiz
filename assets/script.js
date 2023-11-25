/* Things to remember:
1. Place all variables at top of js file. 


/* 1. var startButton is setting a variable to select the button to work with*/
var startBtn = document.getElementById('startBtn');
/*crazy func name but usefull as I learn and for when I revisit code */
function clickedToStartTimerPresentQuestion() {
  alert('OMG! This worked!!');
  //need to present&start timer
  //need to present quetsion
}

startBtn.addEventListener('click', clickedToStartTimerPresentQuestion);
