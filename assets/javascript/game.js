var wins = 0
var losses = 0
var userChance = 9
var letterbox = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = letterbox[Math.floor(Math.random() * letterbox.length)];
var userMiss = []
//should be array captured from userGuess

reset();
display();

document.onkeyup = function(event) {
  
//determines which key pressed
  //if(event.key.match(/^[a-z]$/)) {

  var userGuess = event.key; 
  for (event.key.match(/^[a-z]$/)) {
  
  userMiss.push(userGuess);
  }//hopefully captures user input into arrays 
  if (userGuess === computerGuess) {
    win();
  }
  else if
    (userChance === 0) {
      loser();
    }
     else {
      whiff();//function for misses
     }
  

    function whiff(){
      userChance --;
    }
    function loser(){
      losses ++;
      resetGame();
    }
    function win(){
      wins ++;
      resetGame();
    }

    function resetGame() {
      userChance = 9;
      userMiss = [];
    }
//need to figure out how to place the document.getElementbyID
    function display() {
      document.getElementById("UserMiss").innerHTML += userGuess + " ";
      document.getElementById("wins").innerHTML = "Wins: " + wins;
      

      document.getElementById("userChance").innerHTML = "Guesses Left: " + userChance;
      document.getElementById("UserMiss").innerHTML = "Guesses So Far " + userMiss;
      document.getElementById("UserChance").innerHTML = "Guesses Left: " + userChance;
      document.getElementById("losses").innerHTML = "Losses: " + losses;
      document.getElementById("userChance").innerHTML = "Guesses Left: " + guessesleft;
      document.getElementById("UserMiss").innerHTML = "Guesses So Far: " + userMiss;
    }

}