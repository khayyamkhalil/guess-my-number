'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Refactored the code based on DRY method.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Game reset functionality
document.querySelector('.again').addEventListener('click', function () {
  // Reset Score
  score = 20;
  document.querySelector('.score').textContent = score;
  // Reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // Reset message
  displayMessage('Start guessing...');
  // Reset guess input
  document.querySelector('.guess').value = '';
  // Reset background color
  document.querySelector('body').style.backgroundColor = '#222';
  // Reset number box width
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('🚫 No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    // Display the secret number when player wins
    document.querySelector('.number').textContent = secretNumber;
    // Change background color if player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change width of the number box if player wins
    document.querySelector('.number').style.width = '30rem';
    // Set the highscore based on the winning score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess wrong!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You LOST!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
