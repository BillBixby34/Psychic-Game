var wins = 0
var losses = 0
var userChance = 9
var letterbox = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = letterbox[Math.floor(Math.random() * letterbox.length)];
var userMiss = []
//should be array captured from userGuess




document.onkeyup = function(event) {
  
//determines which key pressed
  //if(event.key.match(/^[a-z]$/)) {

  var userGuess = event.key; 

  if (userGuess !== computerGuess) {//may change to for loop
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
      whiff();//guesses left is not decreasing
     }
  

    function whiff(){
      userChance --;
      document.getElementById("UserMiss").innerHTML = "Guesses So Far " + userMiss;
    }
    function loser(){
      losses ++;
      document.getElementById("losses").innerHTML = "Losses: " + losses;
      resetGame();
    }
    function win(){
      wins ++;
      document.getElementById("wins").innerHTML = "Wins: " + wins;

      resetGame();
    }

    function resetGame() {
      userChance = 9;
      userMiss = [];
    }
  }
//need to figure out how to place the document.getElementbyID
    /*function display() {
      document.getElementById("UserMiss").innerHTML += userGuess + " ";
     
      

      document.getElementById("userChance").innerHTML = "Guesses Left: " + userChance;
      
      document.getElementById("UserChance").innerHTML = "Guesses Left: " + userChance;
      
      document.getElementById("userChance").innerHTML = "Guesses Left: " + guessesleft;
      document.getElementById("UserMiss").innerHTML = "Guesses So Far: " + userMiss;
    }

}*/

