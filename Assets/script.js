// Declare global variables.
var count;
var timer;
var score;
var highScores;

// Assign variables to various parts of HTML.
var timerEl = document.querySelector('#timeLeft');
var introEl = document.querySelector('#intro');
var beginBtn = document.querySelector('#begin');
var quizEl = document.querySelector('#quizDiv');

// Declare multiple-choice questions and corresponding answers in respective arrays.
var q1 = ['What color is the sky?', 'blue', 'green', 'red', 'polka dots', '1'];
var q2 = ['What color are my eyes?', 'blue', 'green', 'red', 'brown', '4'];
var q3 = ['What color is my hair?', 'blue', 'black', 'red', 'purple', '2'];
var q4 = ['What is your favorite pet?', 'dog', 'shark', 'sloth', 'platypus', '1'];
var q5 = ['What color is your car?', 'purple', 'green', 'white', 'grey', '3'];

// Combine all arrays into one large one.
var questionsArray = [q1,q2,q3,q4,q5];

function init() {

    // (Re)sets the screen to play.
    introEl.classList.remove('hidden')
    quizEl.setAttribute('class', 'hidden');
    timerEl.textContent = '75';


    console.log(questionsArray);
}

function displayQ () {

       // Unhide quizDiv (div containing the quiz questions).
       quizEl.classList.remove('hidden');
}

// Listen for a mouse click on the 'Begin Quiz' button.
beginBtn.addEventListener('click', function() {

    console.log('button clicked');

    // Hide the div containing the introductory text.
    introEl.className = 'hidden';

    // Launch the function to display the first question.
    displayQ();
});

// Launch function to initialize application.
init();
