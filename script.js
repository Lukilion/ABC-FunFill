document.addEventListener('DOMContentLoaded', function () {
  const randomAlphabet = document.getElementById('random-alphabet');
  const dropBox = document.getElementById('drop-box');
  const coloredAlphabets = document.querySelectorAll('.colored-alphabet');
  const messageDiv = document.getElementById('message');

  // Add event listeners for drag and drop
  randomAlphabet.addEventListener('dragstart', dragStart);
  dropBox.addEventListener('dragover', dragOver);
  dropBox.addEventListener('drop', drop);

  // Add event listeners for colored alphabets
  coloredAlphabets.forEach((coloredAlphabet) => {
    coloredAlphabet.addEventListener('dragstart', dragStart);
  });

  // Add event listeners for buttons
  document.getElementById('restart-button').addEventListener('click', restartGame);
  document.getElementById('end-game-button').addEventListener('click', endGame);
  document.getElementById('refresh-button').addEventListener('click', refreshPage);

  // Function to handle drag start
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.innerText);
  }

  // Function to handle drag over
  function dragOver(e) {
    e.preventDefault();
  }

  // Function to handle drop
  function drop(e) {
    e.preventDefault();
    const draggedAlphabet = e.dataTransfer.getData('text/plain');

    if (draggedAlphabet === randomAlphabet.innerText) {
      dropBox.innerText = draggedAlphabet;
      randomAlphabet.innerText = generateRandomAlphabet();
      messageDiv.innerText = 'Correct! You win!';
    } else {
      messageDiv.innerText = 'Incorrect! Try again.';
    }
  }

  // Function to generate a random alphabet
  function generateRandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
  }

  // Function to restart the game
  function restartGame() {
    dropBox.innerText = '';
    randomAlphabet.innerText = generateRandomAlphabet();
    messageDiv.innerText = '';
  }

  // Function to end the game
  function endGame() {
    alert('Game Over!');
    // Add any additional actions needed to end the game
  }

  // Function to refresh the page
  function refreshPage() {
    location.reload();
  }
});
