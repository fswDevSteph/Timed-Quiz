// keep ALL variables at the top

var grabStartBtn = document.getElementById('startBtn'); //creates  reference to HTML button with id 'startBtn'
/*Timer variables*/
var timer; //To store the interval ID
var timeRemaining = 120; //time in seconds
var currentQuestionIndex = 0;
var score = 0; // Initialize the score variable
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
  // Get the current question from the array
  var currentQuestion = questions[currentQuestionIndex];

  // Display the question on the page
  alert(currentQuestion.question);

  // Display answer options to the user
  var answerOptions = currentQuestion.answers.map(function (answer, index) {
    return index + 1 + '. ' + answer.text;
  });
  alert(answerOptions.join('\n'));

  // Prompt the user to enter their answer
  var userAnswer = prompt('Enter the number of your answer:');

  // Check if the user's answer is correct and update the score
  if (userAnswer !== null) {
    var userChoiceIndex = parseInt(userAnswer) - 1;
    if (
      currentQuestion.answers[userChoiceIndex] &&
      currentQuestion.answers[userChoiceIndex].correct
    ) {
      alert('Correct!'); // Alert user answer is correct
      score++; // Increment the score
    } else {
      alert('Wrong!'); // ALert user user  their answer is wrong
      timeRemaining -= 5; // Deduct 5 seconds for a wrong answer
    }
  }

  // Increment the current question index
  currentQuestionIndex++;

  // Check if there are more questions or end the quiz
  if (currentQuestionIndex < questions.length) {
    // Start the timer for the next question
    startTimer();
  } else {
    // End of the quiz
    clearInterval(timer); // Stop the timer
    alert('Quiz completed!');
    scoreDisplay.textContent = 'Your score: ' + score; // Update the score display on the page

    // TODO: Add any other logic for the end of the quiz
  }
}

// Attached eventListener to the button to trigger the function
grabStartBtn.addEventListener('click', clickedToStartTimerPresentQuestion);

  alert(answerOptions.join('\n'));

  startTimer(); //start the timer to begin countdown

  //need to present quetsion
}
//attached eventListener to button to trigger function
grabStartBtn.addEventListener('click', clickedToStartTimerPresentQuestion);
