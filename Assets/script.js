// Declare global variables.
var count = 0;
var timer = 75;
var timeInterval;
var score;
var highScore = [];
var highScores = [];
var message;

// Assign variables to various parts of HTML.
var timerEl = document.querySelector('#timeLeft');
var introEl = document.querySelector('#intro');
var beginBtn = document.querySelector('#begin');
var quizEl = document.querySelector('#quizDiv');
var scoreEl = document.querySelector('#scoreDiv');
var statusEl = document.querySelector('#status');
var scoreDisp = document.querySelector('#scoreDisplay');
var initInput = document.querySelector('#initials');
var submitBtnEl = document.querySelector('#submitBtn');
var hiScoresBtn = document.querySelector('#hiScores');

// Declare multiple-choice questions and corresponding answers in respective arrays.
// The last element in the array signifies the position of the right answer.
var q0 = ['Which built-in method returns the length of the string?', 'length()', 'size()', 'index()', 'toString()', '1'];
var q1 = ['JavaScript is a _____-side programming language.', 'client', 'server', 'both', 'none', '3'];
var q2 = ['What is the correct "if" statement to execute code if "x" is equal to 2?', 'if (x 2)', 'if (x = 2)', 'if (x == 2)', 'if (x != 2)', '3'];
var q3 = ['Which of the following is NOT a valid function call?', 'var x = myFunc()', 'myFunc', 'x = myFunc()', 'myFunc()', '2'];
var q4 = ['Which is an advantage of using JavaScript?', 'less server interaction', 'immediate feedback to visitors', 'increased interactivity', 'all of the above', '4'];

// Combine all arrays into a single large array.
var questionsArray = [q0, q1, q2, q3, q4];

function init() {

    // (Re)set the screen to play.
    introEl.classList.remove('hidden');
    quizEl.setAttribute('class', 'hidden');
    scoreEl.setAttribute('class', 'hidden');
    timerEl.textContent = timer;
}

function storeScore() {

    // Hide quiz section and status message section of the page.
    quizEl.innerHTML = '';
    statusEl.setAttribute('class', 'hidden');

    // Show score submission form.
    scoreEl.classList.remove('hidden'); 

    // Show the score (time remaining).
    scoreDisp.innerHTML = timer;

    // Listen for click of Submit button to store initials and score to an array and to local storage.
    submitBtnEl.addEventListener("click", function(event) {

        var initials = document.querySelector("#initials");
        var playerScore = {
            player: initials.value.trim(),
            score: timer
        }

        // highScore = Object.values(playerScore);
        // highScores[iteration][0] = playerScore.player;
        // highScores[iteration][1] = playerScore.score;

        console.log(highScores);

        localStorage.setItem('playerScore', JSON.stringify(playerScore));

        // Store initials and score into an array of high scores.


      });
}

function displayScores() {

}

function displayQ () {

    // Cycle through all questions in array.

    if (count < questionsArray.length) {

        // Display the question by generating HTML.
        quizEl.innerHTML = '<h1>' + questionsArray[count][0] + '</h1>';

        // Cycle through all multiple choice answers in each subarray. These reside in the second through the next-to-last elements in each subarray.
        for (i = 1; i < questionsArray[count].length-1; i++) {

            // Assign a variable to represent a class for the answer buttons that will be built, so they can be styled.
            var btnClass = 'multiChoice';

            // Build the HTML dynamically for each button.
            var buildBtn = '<button class='+ btnClass +'>' + i + '. ' + questionsArray[count][i] + '</button><br />';

            // Add the buttons to the div.
            quizEl.innerHTML += buildBtn;
        };
    } else {

        // Stop timer once all questions have been asked and answered.
        clearInterval(timeInterval);

        // Call function to store your score.
        storeScore();
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

            // Calls function to store your score.
            storeScore();
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

        // Decrease the time by an additional 10sec and update timer.
        timer-=10;
        timerEl.textContent = timer;
    }

    // Display "correct" or "incorrect" message.
    statusEl.innerHTML = '<hr /><br />' + message;

    // Clear the message after 1.25sec.
    setTimeout(function() { statusEl.innerHTML = ''; }, 1250);

    // Displays the next question regardless of right/wrong answer.
    count++;
    displayQ();
});
 
hiScoresBtn.addEventListener('click', displayScores());

// Launch function and initialize settings.
init();