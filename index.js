//Global variables
var wordArray = ["justin", "briones", "greg", "adam"];
var randomWord = "";
var splitWord = [];
var numBlanks = 0;
var blanksAndSuccess = [];
var wrongGuesses = [];

//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions
function startGame () {
  randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  splitWord.push(randomWord.split(""));
  numBlanks = randomWord.length;
  //populate blanks and successes with right num of blanksAndSuccess
  for (var i=0; i < numBlanks; i++) {
    blanksAndSuccess.push("_ ");
  }
  //Change HTML to reflect round conditions
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join(" ");
  document.getElementById('guessesLeft').innerHTML = guessesLeft;
  //reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccess = [];
};



//Main process
startGame();
