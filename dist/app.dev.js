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
  }; // ElementLocations is object holding important element which will be later used


  var ElementLocations = {
    restart: document.querySelector(".restart"),
    start: document.querySelector(".start"),
    board: document.querySelector(".board"),
    p1NameInput: document.querySelector(".player-1-input"),
    p2NameInput: document.querySelector(".player-2-input"),
    p1Name: document.querySelector(".player1-namespace-para"),
    p2Name: document.querySelector(".player2-namespace-para")
  }; // In Object Players there is Player1 and Player2, Player1 is a circle, Player2 is a cross, for visual shapes on board

  var Players = {
    Player1: "<svg class=\"circle\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"></path>\n        </svg>",
    Player2: "<svg class=\"cross\" viewBox=\"0 0 24 24\">\n                              <path fill=\"currentColor\" d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"></path>\n                      </svg>"
  }; // PlayerNames functions check looks at input name and assigns it, del deletes it when clicked restart, playerName object saves it for later use

  var PlayerNames = function PlayerNames() {
    var playerName = {
      P1: ElementLocations.p1Name.textContent,
      P2: ElementLocations.p2Name.textContent
    };

    var check = function check() {
      if (ElementLocations.p1NameInput.value) {
        ElementLocations.p1Name.textContent = ElementLocations.p1NameInput.value;
      }

      if (ElementLocations.p2NameInput.value) {
        ElementLocations.p2Name.textContent = ElementLocations.p2NameInput.value;
      }
    };

    var del = function del() {
      if (ElementLocations.p1NameInput.value) {
        ElementLocations.p1Name.textContent = "X is player 1";
        ElementLocations.p1NameInput.value = "";
      }

      if (ElementLocations.p2NameInput.value) {
        ElementLocations.p2Name.textContent = "O is player 2";
        ElementLocations.p2NameInput.value = "";
      }
    };

    return {
      check: check,
      playerName: playerName,
      del: del
    };
  }; // I used here placeContent() and named it positionArr for better readablity, i wanted it to be constant for safer referencing, but it i must reassign it again in my ReadingArr()


  var positionArr = placeContent(); // Clear is there for situation when user clicks restart button, it will be used later

  var Clear = function Clear() {
    var clearing = "<div class=\"spot1\"></div>\n                      <div class=\"spot2\"></div>\n                      <div class=\"spot3\"></div>\n                      <div class=\"spot4\"></div>\n                      <div class=\"spot5\"></div>\n                      <div class=\"spot6\"></div>\n                      <div class=\"spot7\"></div>\n                      <div class=\"spot8\"></div>\n                      <div class=\"spot9\"></div>";
    return {
      clearing: clearing
    };
  }; // I made round array for measuring through it's length which player plays, i check with it if tie happened, all block are filled and no one won


  var round = []; // StateCheck is really long ... , it checks if there is match of circles or crosses or if if tie happened

  var StateCheck = function StateCheck() {
    var Winner1 = positionArr[0].innerHTML === Players.Player1 && positionArr[1].innerHTML === Players.Player1 && positionArr[2].innerHTML === Players.Player1 || positionArr[2].innerHTML === Players.Player1 && positionArr[5].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[6].innerHTML === Players.Player1 && positionArr[7].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[3].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[5].innerHTML === Players.Player1 || positionArr[0].innerHTML === Players.Player1 && positionArr[3].innerHTML === Players.Player1 && positionArr[6].innerHTML === Players.Player1 || positionArr[1].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[7].innerHTML === Players.Player1 || positionArr[0].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[2].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[6].innerHTML === Players.Player1;
    var Winner2 = positionArr[0].innerHTML === Players.Player2 && positionArr[1].innerHTML === Players.Player2 && positionArr[2].innerHTML === Players.Player2 || positionArr[2].innerHTML === Players.Player2 && positionArr[5].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[6].innerHTML === Players.Player2 && positionArr[7].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[3].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[5].innerHTML === Players.Player2 || positionArr[0].innerHTML === Players.Player2 && positionArr[3].innerHTML === Players.Player2 && positionArr[6].innerHTML === Players.Player2 || positionArr[1].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[7].innerHTML === Players.Player2 || positionArr[0].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[2].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[6].innerHTML === Players.Player2;
    var tie = round.length === 9 && Winner1 !== true && Winner2 === true;
    return {
      Winner1: Winner1,
      Winner2: Winner2,
      tie: tie
    };
  }; // StateEffect is what happens when StateCheck happened, if circle or cross won, or tie


  var StateEffect = function StateEffect() {
    var winP1 = function winP1() {
      document.body.innerHTML = "<div class=\"win\"><p>".concat(PlayerNames().playerName.P1, " has won, congratulations!</p><p>X</p></div>");
    };

    var winP2 = function winP2() {
      document.body.innerHTML = "<div class=\"win2\"><p>".concat(PlayerNames().playerName.P2, " has won, congratulations!</p><p>O</p></div>");
    };

    var tie = function tie() {
      document.body.innerHTML = "<div class=\"tie\"><p>Tie!</p></div>";
    };

    return {
      winP1: winP1,
      winP2: winP2,
      tie: tie
    };
  }; // ReadingArr is place where i use all my blocks to build my code


  var ReadingArr = function ReadingArr() {
    positionArr = placeContent(); // This array gives event listener to all div's

    var _loop = function _loop(i) {
      positionArr[i].addEventListener("click", function () {
        // I use odd or even to know which player moves now and check if that place is empty, then i give appropiate object to the place and make array longer
        // Last else is there for case when all is full and i need to make tia and no one won
        if (round.length % 2 === 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player1;
        } else if (round.length % 2 !== 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player2;
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

    for (var i = 0; i < positionArr.length; i += 1) {
      _loop(i);
    }
  }; // start function is for what happens when someone clicks on start button, it will start ReadingArr() and if chosen name it will give players names


  var start = function start() {
    ElementLocations.start.addEventListener("click", function () {
      ReadingArr();
      PlayerNames().check();
    });
  }; // restart function is for what happens when someone clicks on restart button, it will delete name and position of figures with Clear() and PlayerNames().del()


  var restart = function restart() {
    ElementLocations.restart.addEventListener("click", function () {
      ElementLocations.board.innerHTML = Clear();
      PlayerNames().del();
    });
  }; // I return ReadingArr to make it public function


  return {
    ReadingArr: ReadingArr,
    ElementLocations: ElementLocations,
    start: start,
    restart: restart
  };
}; // There i use my Logic() and name it as TicTacToe


var TicTacToe = Logic(); // TicTacToe what happens when someone clicks on start button

TicTacToe.start(); // TicTacToe what happens when  someone clicks on restart button

TicTacToe.restart();