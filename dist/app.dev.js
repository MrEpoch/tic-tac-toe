"use strict";

// Made by Mr.Epoch as my practice of factory functions and modules in Odin project
// In the logic is all of code used
var Logic = function Logic() {
  // I first made placeContent which will selects all of my div's on which will user click
  var placeContent = function placeContent() {
    // it is placed inside of array, then through for loop i pushed 9 locations of html div's inside of my array, then returned it
    var placementArr = [];

    for (var i = 1; i <= 9; i += 1) {
      var place = ".spot" + i;
      var Htmlplace = document.querySelector(place);
      placementArr.push(Htmlplace);
    }

    return placementArr;
  }; // In Object Players there is Player1 and Player2, Player1 is a circle, Player2 is a cross

  var Players = {
    Player1:
      '<svg class="circle" viewBox="0 0 24 24">\n          <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>\n        </svg>',
    Player2:
      '<svg class="cross" viewBox="0 0 24 24">\n                              <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>\n                      </svg>',
  }; // I used here placeContent() and named it positionArr for better readablity

  var positionArr = placeContent(); // I made round array for measuring through it's length which player plays, i check with it if tie happened, all block are filled

  var round = []; // StateCheck is really long ... , it checks if there is match of circles or crosses or if if tie happened

  var StateCheck = function StateCheck() {
    var Winner1 =
      (positionArr[0].innerHTML === Players.Player1 &&
        positionArr[1].innerHTML === Players.Player1 &&
        positionArr[2].innerHTML === Players.Player1) ||
      (positionArr[2].innerHTML === Players.Player1 &&
        positionArr[5].innerHTML === Players.Player1 &&
        positionArr[8].innerHTML === Players.Player1) ||
      (positionArr[6].innerHTML === Players.Player1 &&
        positionArr[7].innerHTML === Players.Player1 &&
        positionArr[8].innerHTML === Players.Player1) ||
      (positionArr[3].innerHTML === Players.Player1 &&
        positionArr[4].innerHTML === Players.Player1 &&
        positionArr[5].innerHTML === Players.Player1) ||
      (positionArr[0].innerHTML === Players.Player1 &&
        positionArr[3].innerHTML === Players.Player1 &&
        positionArr[6].innerHTML === Players.Player1) ||
      (positionArr[1].innerHTML === Players.Player1 &&
        positionArr[4].innerHTML === Players.Player1 &&
        positionArr[7].innerHTML === Players.Player1) ||
      (positionArr[0].innerHTML === Players.Player1 &&
        positionArr[4].innerHTML === Players.Player1 &&
        positionArr[8].innerHTML === Players.Player1) ||
      (positionArr[2].innerHTML === Players.Player1 &&
        positionArr[4].innerHTML === Players.Player1 &&
        positionArr[6].innerHTML === Players.Player1);
    var Winner2 =
      (positionArr[0].innerHTML === Players.Player2 &&
        positionArr[1].innerHTML === Players.Player2 &&
        positionArr[2].innerHTML === Players.Player2) ||
      (positionArr[2].innerHTML === Players.Player2 &&
        positionArr[5].innerHTML === Players.Player2 &&
        positionArr[8].innerHTML === Players.Player2) ||
      (positionArr[6].innerHTML === Players.Player2 &&
        positionArr[7].innerHTML === Players.Player2 &&
        positionArr[8].innerHTML === Players.Player2) ||
      (positionArr[3].innerHTML === Players.Player2 &&
        positionArr[4].innerHTML === Players.Player2 &&
        positionArr[5].innerHTML === Players.Player2) ||
      (positionArr[0].innerHTML === Players.Player2 &&
        positionArr[3].innerHTML === Players.Player2 &&
        positionArr[6].innerHTML === Players.Player2) ||
      (positionArr[1].innerHTML === Players.Player2 &&
        positionArr[4].innerHTML === Players.Player2 &&
        positionArr[7].innerHTML === Players.Player2) ||
      (positionArr[0].innerHTML === Players.Player2 &&
        positionArr[4].innerHTML === Players.Player2 &&
        positionArr[8].innerHTML === Players.Player2) ||
      (positionArr[2].innerHTML === Players.Player2 &&
        positionArr[4].innerHTML === Players.Player2 &&
        positionArr[6].innerHTML === Players.Player2);
    var tie = round.length === 10;
    return {
      Winner1: Winner1,
      Winner2: Winner2,
      tie: tie,
    };
  }; // StateEffect is what happens when StateCheck happened, if circle or cross won, or tie

  var StateEffect = function StateEffect() {
    var winP1 = function winP1() {
      document.body.innerHTML =
        '<div class="win"><p>Player 1 has Won, congratulations!</p><p>X</p></div>';
    };

    var winP2 = function winP2() {
      document.body.innerHTML =
        '<div class="win2"><p>Player 2 has Won, congratulations!</p><p>O</p></div>';
    };

    var tie = function tie() {
      document.body.innerHTML = '<div class="tie"><p>Tie!</p></div>';
    };

    return {
      winP1: winP1,
      winP2: winP2,
      tie: tie,
    };
  }; // I made round array for measuring through it's length which player plays, it was easier for me to use array then integer
  // ReadingArr is place where i use all my blocks to build my code

  var ReadingArr = function ReadingArr() {
    var _loop = function _loop(i) {
      positionArr[i].addEventListener("click", function () {
        // I use odd or even to know which player moves now and check if that place is empty, then i give appropiate object to the place and make array longer
        // Last else is there for case when all is full and i need to make tie, i plan to repair it to make it automatic without setInterval
        if (round.length % 2 === 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player1;
        } else if (round.length % 2 !== 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player2;
        } else {
          round.push("empty");
        } // There i use StateCheck and StateEffect

        if (StateCheck().Winner1) {
          StateEffect().winP2();
        } else if (StateCheck().Winner2) {
          StateEffect().winP1();
        }

        if (StateCheck().tie) {
          StateEffect().tie();
        }
      });
    };

    // This array gives event listener to all div's
    for (var i = 0; i < positionArr.length; i += 1) {
      _loop(i);
    }
  }; // I return ReadingArr to make it public function

  return {
    ReadingArr: ReadingArr,
  };
}; // There i use my Logic()

Logic().ReadingArr();
