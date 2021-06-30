// Declare global variables.
var count = 0;
var timer = 1000;
var timeInterval;
var score;
var highScores;
var message;

// Assign variables to various parts of HTML.
var timerEl = document.querySelector('#timeLeft');
var introEl = document.querySelector('#intro');
var beginBtn = document.querySelector('#begin');
var quizEl = document.querySelector('#quizDiv');
var statusEl = document.querySelector('#status')

// Declare multiple-choice questions and corresponding answers in respective arrays.
// The last element in the array signifies the position of the right answer.
var q0 = ['1. Which built-in method returns the length of the string?', 'length()', 'size()', 'index()', 'toString()', '1'];
var q1 = ['2. JavaScript is a _____-side programming language.', 'client', 'server', 'both', 'none', '3'];
var q2 = ['3. What is the correct "if" statement to execute code if "x" is equal to 2?', 'if (x 2)', 'if (x = 2)', 'if (x == 2)', 'if (x != 2)', '3'];
var q3 = ['4. Which of the following is NOT a valid function call?', 'var x = myFunc()', 'myFunc', 'x = myFunc()', 'myFunc()', '2'];
var q4 = ['5. Which is an advantage of using JavaScript?', 'less server interaction', 'immediate feedback to visitors', 'increased interactivity', 'all of the above', '4'];

// Combine all arrays into a single large array.
var questionsArray = [q0, q1, q2, q3, q4];

function init() {

    // (Re)set the screen to play.
    introEl.classList.remove('hidden');
    quizEl.setAttribute('class', 'hidden');
    timerEl.textContent = timer;
}

function hideStatus() {
    statusEl.innerHTML = '';
}

function displayQ () {

    // Cycle through all questions in array.

    if (count < questionsArray.length) {

        // Display question and possible answers by generating HTML.
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

        // go to high scores function.
        // quizEl.setAttribute('class', 'hidden');
        // statusEl.setAttribute('class', 'hidden');     
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
            clearInterval(timeInterval);
            // console.log('TIME IS UP SUCKAAAA');

            // go to high scores function.
            // quizEl.setAttribute('class', 'hidden');
            // statusEl.setAttribute('class', 'hidden');
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
          
    // Compare value of selected character vs. value of correct answer.
    if (firstChar == questionsArray[count][5]) {
        message = 'Right!';
    } else {
        message = 'Wrong!';
        timer-=10;
        timerEl.textContent = timer;
    }

    statusEl.innerHTML = '<hr /><br />' + message;

    setTimeout(hideStatus, 2000);

    // Displays the next question regardless of right/wrong answer.
    count++;
    displayQ();
});
 
// Launch function and initialize settings.
init();