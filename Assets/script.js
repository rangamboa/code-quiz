// Declare global variables.
var count = 0;
var timer = 75;
var timeInterval;
var score;
var highScores;
var choices;
var choicesEl;
var choiceAnswer;
var correctAnswer;

// Assign variables to various parts of HTML.
var timerEl = document.querySelector('#timeLeft');
var introEl = document.querySelector('#intro');
var beginBtn = document.querySelector('#begin');
var quizEl = document.querySelector('#quizDiv');

// Declare multiple-choice questions and corresponding answers in respective arrays.
// The last element in the array signifies the position of the right answer.
var q0 = ['1. What color is the sky?', 'blue', 'green', 'red', 'polka dots', '1'];
var q1 = ['2. What color are my eyes?', 'blue', 'green', 'red', 'brown', '4'];
var q2 = ['3. What color is my hair?', 'blue', 'black', 'red', 'purple', '2'];
var q3 = ['4. What is your favorite pet?', 'dog', 'shark', 'sloth', 'platypus', '1'];
var q4 = ['5. What color is your car?', 'purple', 'green', 'white', 'grey', '3'];

// Combine all arrays into a single large array.
var questionsArray = [q0, q1, q2, q3, q4];

function init() {

    // (Re)sets the screen to play.
    introEl.classList.remove('hidden')
    quizEl.setAttribute('class', 'hidden');
    timerEl.textContent = timer;

}

function displayQ () {

    // Cycle through all questions in array.

    if (count < questionsArray.length) {

        quizEl.innerHTML = '<h1>' + questionsArray[count][0] + '</h1>';

        // Cycle through all multiple choice answers in each subarray.
        for (i = 1; i < questionsArray[count].length-1; i++) {

            // Build IDs for answer buttons.
            var buildBtnID = 'answer-' + i;
            var btnClass = 'multiChoice';

            // Build the HTML for the actual buttons.
            var buildBtn = '<button id='+ buildBtnID +' class='+ btnClass +'>' + i + '. ' + questionsArray[count][i] + '</button><br />';

            // Add the buttons to the div.
            quizEl.innerHTML += buildBtn;
        };
    } else {
        console.log('no more questions');
        clearInterval(timeInterval);
        console.log(timer);
        quizEl.setAttribute('class', 'hidden');
    }
}

// Listen for a mouse click on the 'Begin Quiz' button.
beginBtn.addEventListener('click', function(event) {

    event.preventDefault();

    // Hide the div containing the introductory text.
    introEl.className = 'hidden';

    // Unhide quizDiv (div containing the quiz questions).
    quizEl.classList.remove('hidden');

    // Start a timer to display a countdown every 1 second.
    timeInterval = setInterval(function() {
    
        // Decrements and displays the remaining time.
        timer--;
        timerEl.textContent = timer;
    
        if (timer <= 0) {
            console.log('TIME IS UP SUCKAAAA');
            clearInterval(timeInterval);
            quizEl.setAttribute('class', 'hidden');
            return;
        }
    }, 1000);

    // Launch the function to display the first question.
    displayQ();
});

// Listen for clicks on the dynamically-generated multiple choice buttons.
quizEl.addEventListener('click', function(event) {

    // Pull the first value of the string. This corresponds to its position in the array.
    var firstChar = event.target.textContent.charAt(0);

    console.log(firstChar + ' and ' + questionsArray[count][5]);
            
    // Compare value of selected string vs. value of correct answer.
    if (firstChar == questionsArray[count][5]) {
        console.log('Right answer!');
    } else {
        console.log('Wrong answer!');
        timer-=10;
    }

    // Displays the next question regardless of right/wrong answer.
    count++;
    displayQ();
});
 
// Launch function to initialize application.
init();