// keep ALL variables at the top

var grabStartBtn = document.getElementById('startBtn'); //creates  reference to HTML button with id 'startBtn'
/*Timer variables*/
var timer; //To store the interval ID
var timeRemaining = 120; //time in seconds
var currentQuestionIndex = 0;
var score = 0; // Initialize the score variable
var questions = [
  {
    //question
    question: 'What main coding language are we learning?',
    //Answers array
    answers: [
      { text: 'Python', correct: false },
      { text: 'Java', correct: false },
      { text: 'JavaScript', correct: true },
    ],
    //question
    question: 'What color does red and yellow make?',
    //Answers array
    answers: [
      { text: 'lighter red', correct: false },
      { text: 'orange', correct: true },
      { text: 'black', correct: false },
    ],
  
];
//reference to the score element
var scoreDisplay = document.getElementById('scoreDisplay');

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
// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Attached eventListener to the button to trigger the function
grabStartBtn.addEventListener('click', clickedToStartTimerPresentQuestion);

// function that's triggered when the button is clicked
function clickedToStartTimerPresentQuestion() {
  //set all of the elements in the original display to be hidden
  var gameRules = document.getElementById('gameRules');
  document.getElementById('startBtn').style.display = 'none';
  gameRules.style.display = 'none';
  //call two other starting functions
  startTimer();
  displayQuestion();
}
function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex]; // this is going to be the question that we are going to start to add to the page
  //clear out quizContainer so we can remove past questions, this only comes into play when we are on the second or any question after the first
  document.getElementById('quizContainer').innerHTML = '';

  //need to create an h2 element to display the question

  var h2Question = document.createElement('h2');
  h2Question.innerText = currentQuestion.question;
  // now we have an h2 element that is going to be able to display to the page so lets append it
  document.getElementById('quizContainer').appendChild(h2Question);

  //next step is to loop through
}

// Attached eventListener to the button to trigger the function
grabStartBtn.addEventListener('click', clickedToStartTimerPresentQuestion);
function clickedToStartTimerPresentQuestion() {
  //set all of the elements in the original display to be hidden
  var gameRules = document.getElementById('gameRules');
  gameRules.style.display = 'none';
  //call two other starting functions
  startTimer();
  displayQuestion();
}
