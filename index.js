
// Generating the random number for each player
var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;


// Displaying who won based on math
if (p1 > p2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (p1 < p2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩We Have a Tie!🚩";
}

// Generating the dice on screen for each player

// Player 1 Dice
if (p1 === 1){
  document.querySelector(".img1").src = "images/dice1.png";
}
else if (p1 === 2){
  document.querySelector(".img1").src = "images/dice2.png";
}
else if (p1 === 3){
  document.querySelector(".img1").src = "images/dice3.png";
}
else if (p1 === 4){
  document.querySelector(".img1").src = "images/dice4.png";
}
else if (p1 === 5){
  document.querySelector(".img1").src = "images/dice5.png";
}
else if (p1 === 6){
  document.querySelector(".img1").src = "images/dice6.png";
}

// Player 2 Dice
if (p2 === 1){
  document.querySelector(".img2").src = "images/dice1.png";
}
else if (p2 === 2){
  document.querySelector(".img2").src = "images/dice2.png";
}
else if (p2 === 3){
  document.querySelector(".img2").src = "images/dice3.png";
}
else if (p2 === 4){
  document.querySelector(".img2").src = "images/dice4.png";
}
else if (p2 === 5){
  document.querySelector(".img2").src = "images/dice5.png";
}
else if (p2 === 6){
  document.querySelector(".img2").src = "images/dice6.png";
}
