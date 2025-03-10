//Declaring Variable for Locotions
var location = 3;
var location = 4;
var location = 5;

//
var guess;
var hits = 0;
var guess = 0;

var isSunk = false;

//Game Logic//

while (isSunk == false) {
    guess =  prompt("Read!, Aim!, Fire!, (Enter Number 0=0) ");

    if (guess < 0 || guess >6) {
        alert("Please Enter A Valid Cell Number!");
    }else {
      guesses = guesses + 1;

      if (guesses == location1 || guess == location2 || guess == location3) {
        hits = hits + 1;
          if (hits == 3) {
            isSunk = true;
            alert("You Sank my Battlesip")
        }
    }  else {
        alert("wise")
    }
    }
}

var stats = "You sank my battleship at: " + guesses + " guesses" + " And your accuracy is: " (3/guesses);

alert(stats);
