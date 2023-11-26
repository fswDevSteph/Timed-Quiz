// keep ALL variables at the top

var grabStartBtn = document.getElementById('startBtn'); //creates  reference to HTML button with id 'startBtn'
/*Timer variables*/
var timer; //To store the interval ID
var timeRemaining = 120; //time in seconds
var questions = [];
questions.push({
  //question
  question: 'What main coding language are we learning?',
  //Answers array
  answers: [
    { text: 'Python', correct: false },
    { text: 'Java', correct: false },
    { text: 'JavaScript', correct: true },
  ],
});

/*Start timer function */
function startTimer() {
  //Sets up an interval to update timer every second
  timer = setInterval(function () {
    // Display the time remaining on the screen
    document.getElementById('timerDisplay').textContent =
      'Time: ' + timeRemaining + 's';

    /*checking if time ran out */
    if (timeRemaining <= 0) {
      clearInterval(timer); //stops timer
      alert('Times up!');
    }
    timeRemaining--;
  }, 1000); //updates time every 1 second
}

// function thats triggered when button is clicked
function clickedToStartTimerPresentQuestion() {
  //alert(' This worked!!');
  startTimer(); //start the timer to begin countdown

  //need to present quetsion
}
//attached eventListener to button to trigger function
grabStartBtn.addEventListener('click', clickedToStartTimerPresentQuestion);
