var h1 = document.getElementsByTagName("h1")[0];
var player1Dice = document.getElementsByClassName("img1")[0];
var player2Dice = document.getElementsByClassName("img2")[0];

function updateDice() {
  // Player 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // determinig dice of player 1
  var imageLink1 = "images/dice" + randomNumber1 + ".png";
  player1Dice.setAttribute("src", imageLink1); //updating dice image of player 1

  // Player 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // determining dice of player 2
  var imageLink2 = "images/dice" + randomNumber2 + ".png";
  player2Dice.setAttribute("src", imageLink2); // updating dice image of player 2

  // returning winner
  if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins! 🚩";
  } else if (randomNumber2 < randomNumber1) {
    h1.innerHTML = "🚩 Player 1 Wins!";
  } else {
    h1.innerHTML = "Draw!";
  }
}
