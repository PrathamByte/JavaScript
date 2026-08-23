// Generate random number
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessesSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame(); 
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  guessesSlot.innerHTML += `${guess} `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  // Fixed: Changed id to camelCase "newGame" to match your querySelector
  p.innerHTML = `<h2 id="newGame" style="cursor:pointer;">Start New Game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        // Fixed: Correctly re-assigning a new random number
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessesSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        resultParas.removeChild(p);
        displayMessage(''); // Clears the win/loss message

        playGame = true;
    });
};
