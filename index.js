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
  // splitWord.push(randomWord.split(""));
  splitWord = randomWord.split("");
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

function checkLetters(letter) {
  //check if the letter exists in the word
  var isLetterInWord = false;
  for(var i = 0; i<numBlanks; i++) {
    if(randomWord[i] == letter) {
      isLetterInWord = true;
    }
  }
  //check where in the word it exists then populate blankAndSuccess array

  if(isLetterInWord) {


  for (var i = 0; i<numBlanks; i++) {
    if(randomWord[i] == letter) {
      blanksAndSuccess[i] = letter;
    }
  }
}

else {
  wrongLetters.push(letter);
  guessesLeft--;
}
};

function roundComplete() {
  //check if user wron
  if (splitWord.toString() == blanksAndSuccess.toString()) {
    console.log("you won");
    startGame();
  }
  //check if user lost
}

//Main process
startGame();

//register keyclicks
document.onkeyup = function(event) {
  var letterGuessed = event.key;
  checkLetters(letterGuessed);
  roundComplete();

}
