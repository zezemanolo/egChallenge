// A function to get the set of possible letters
function getLetters() {
  var lettersContainer = document.querySelector('#letters');
  var letters = lettersContainer.innerText;
  return letters;
}
//An array 'shuffle' function to implement down the road
Array.prototype.shuffle = function() {
    var i = this.length;
    if (i == 0) return this;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1 ));
        var a = this[i];
        var b = this[j];
        this[i] = b;
        this[j] = a;
    }
    return this;
};

//A function that returns string w/ random, and shuffled, letters
function randomLetters() {
  var newWord = "";
  var consonants = "BCDFGHJKLMNPQRSTVWXYZ";
  var vowels = "AEIOU";
  var i;
  for(i = 0; i < 4; i++) {
    newWord += consonants.charAt(Math.floor(Math.random() * consonants.length));
  }
  for(i = 0; i < 3; i++) {
    newWord += vowels.charAt(Math.floor(Math.random() * vowels.length));
  }
  document.querySelector('#letters').innerText = newWord.split('').shuffle().join('');
}

//A function to shuffle letters on browser
function shuffleLetters() {
  var shuffString = getLetters().split('').shuffle().join('');
  console.log(shuffString);
  document.querySelector('#letters').innerText = shuffString;
 }

// A function to get the user's guess
function getGuess() {
  // Select the input element where the user enters their guess
  var wordGuess = document.querySelector('input#word-guess');
  var guess = wordGuess.value;
  return guess;
}

// A function to display a message on the screen
function showMessage(messageText) {
  var messageElem = document.querySelector('#game-message');
  messageElem.innerText = messageText;
}
// A function to check whether the guessed word is correct or not
function checkGuess() {
  var letters = getLetters().toUpperCase();
  var guess = getGuess().toUpperCase();

  for (var i = 0; i < guess.length; i++) {
    var currentChar = guess[i];
    // If the current character can't be found in letters, the guess is incorrect
    if (letters.indexOf(currentChar) === -1) {
      // Show a message saying guess is incorrect
      showMessage("Wrong guess, try again.");
      // Return false to exit the function
      return false;
    }
  // If we've made it this far, then the guess must be correct!
  // Show a message saying guess is correct
  showMessage("Good guess, that is correct!");
  // Return true to exit the function
  return true;
  }
}
