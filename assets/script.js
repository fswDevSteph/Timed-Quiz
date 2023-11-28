// keep ALL variables at the top
var grabStartBtn = document.getElementById('startBtn'); //creates  reference to HTML button with id 'startBtn'
/*Timer variables*/
var timer; //To store the interval ID
var timeRemaining = 120; //time in seconds
var currentQuestionIndex = 0;
var score = 0; // Initialize the score variable
var questions = [
  // questions variable is an array
  {
    //has 3 main objects
    question: 'Who said, "Believe you can and you are halfway there"?',
    //correct answer name / value pair
    correctAnswer: 'Theodore Roosevelt',
    //Answers array
    answers: [
      // made up of 3 objects.

      { text: 'Albert Einstein', correct: false }, //each object has 2 properties
      { text: 'Michael Jackson', correct: false },
      { text: 'Theodore Roosevelt', correct: true },
    ],
  },
  {
    //question 2
    question:
      'Who is known for the quote, "The only way to do great work is to love what you do"?',
    //correct answer
    correctAnswer: 'Confucius',
    //Answers array
    answers: [
      { text: 'Steve Jobs', correct: false },
      { text: 'Confucius', correct: true },
      { text: 'Ellen', correct: false },
    ],
  },
  {
    //question 3
    question:
      'Which individual stated, "The future belongs to those who believe in the beauty of their dreams"?',
    //correct answer
    correctAnswer: 'Eleanor Roosevelt',
    //Answers array
    answers: [
      { text: 'Eleanor Roosevelt', correct: true },
      { text: 'Nelson Mandela', correct: false },
      { text: 'Oprah Winfrey', correct: false },
    ],
  },
  {
    //question 4
    question: 'Who said, "In the middle of difficulty lies opportunity"?',
    //correct answer
    correctAnswer: 'Albert Einstein',
    //Answers array
    answers: [
      { text: 'Albert Einstein', correct: true },
      { text: 'Thomas Edison', correct: false },
      { text: 'Isaac Newton', correct: false },
    ],
  },
  {
    //question 5
    question:
      'Which famous figure declared, "It always seems impossible until it is done"?',
    //correct answer
    correctAnswer: 'Nelson Mandela',
    //Answers array
    answers: [
      { text: 'Martin Luther King Jr.', correct: false },
      { text: 'Mahatma Gandhi', correct: false },
      { text: 'Nelson Mandela', correct: true },
    ],
  },
  {
    //question 6
    question:
      'Who is credited with the quote, "The only limit to our realization of tomorrow will be our doubts of today"?',
    //correct answer
    correctAnswer: 'Franklin D. Roosevelt',
    //Answers array
    answers: [
      { text: 'Abraham Lincoln', correct: false },
      { text: 'Franklin D. Roosevelt', correct: true },
      { text: 'Martha Stewert', correct: false },
    ],
  },
  {
    // Question 7
    question:
      'Which famous figure stated, "The best way to predict the future is to create it"?',
    // Correct answer
    correctAnswer: 'Peter Drucker',
    // Answers array
    answers: [
      { text: 'Mark Zuckerberg', correct: false },
      { text: 'Peter Drucker', correct: true },
      { text: 'Elon Musk', correct: false },
    ],
  },
  {
    // Question 8
    question:
      'Which individual is credited with the quote, "You miss 100% of the shots you don\'t take"?',
    // Correct answer
    correctAnswer: 'Wayne Gretzky',
    // Answers array
    answers: [
      { text: 'Wayne Gretzky', correct: true },
      { text: 'Michael Jordan', correct: false },
      { text: 'Kobe Bryant', correct: false },
    ],
  },
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
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    //here you will add console.log
    console.log(currentQuestion.answers[i]);
    var answerBtn = document.createElement('button');

    answerBtn.innerText = currentQuestion.answers[i].text;
    //
    document.getElementById('quizContainer').appendChild(answerBtn);
    answerBtn.addEventListener('click', function (event) {
      console.log(event.target);

      if (event.target.innerText === currentQuestion.correctAnswer) {
        console.log('clicked right answer');
        //clear section with questions and increase Question index counter
        //show questions again w/ new index counter
      }
    });
  }
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
