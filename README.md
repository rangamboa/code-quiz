# JavaScript Code Quiz

## Task

Generate a timed quiz with multiple-choice answers; dynamically retain high scores in local storage.

## Process

This homework project consisted of multiple parts that all had to work together seamlessly to provide a smooth user experience. I decided to create divs that could be hidden and un-hidden to simulate different "pages" of the site (introduction page, quiz page, user initials submission page and high scores page).

After the user clicked through the introduction page, a function would start a timer. Question generation was handled in JavaScript by building an array of the questions with their corresponding answer choices. The last element in each array was the position of the correct answer in the array. After the questions were dynamically built through Javascript in HTML and made into clickable buttons, a function would then derive a value from the button and compare it to the value of the correct answer. Incorrect answers resulted in a penalty of reduced time. Another function would iterate through the entire array of questions. Once either time ran out or all the questions were answered, a function would be called for the user to submit their initials along with their score (the remaining time).

Here is where I unfortunately ran into trouble. I couldn't quite create a successful method to store the user initials and score into objects to put into local storage. I got stuck on being able to load more information into the array of objects (my iteration variable kept resetting so information would be overwritten). Hence I wasn't able to make the High Scores function either since I had no way to store the data to be displayed.

## Resources

I mostly used the class sessions and materials to create this site. I also consulted various websites on JavaScript, including:

* W3Schools
* MDN
* LaunchSchool
* Stack Overflow

## Link to Deployed Github Page

[Portfolio](https://rangamboa.github.io/password-generator/)

## Screenshots

![screenshot](Images/password-generator.png)

- - -
© 2021 Ran Gamboa
