function playGame() {
  
//have the computer choose a number between 1 and 4

var computer = (Math.floor(Math.random()*4)+1);

//ask player two for a number between 1 and 4
var p2 = prompt("Num between 1 and 4");
//scold the player if they entered a number outfit of the range
if ((p1 < 1 || p1 > 4) || (p2 < 1 || p2 >4)) {
  window.alert("One of you cheated. Game over.");
  return;
}
//if the player one AND play two number are the same, say everyone wins.
if (p1 === p2) {
  window.alert("You both win");
  
}
//ELSE tell both players what they chose, and why they are losers
else {
  window.alert("You both lose. Player one choose" + p1 + "and player two choose" + p2);
}

}