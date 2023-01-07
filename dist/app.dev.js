"use strict";

var logic = function logic() {
  var round = [];

  var placeContent = function placeContent() {
    var placementArr = [];

    for (var i = 1; i <= 9; i += 1) {
      var place = ".spot" + i;
      var Htmlplace = document.querySelector(place);
      placementArr.push(Htmlplace);
    }

    return placementArr;
  };

  var Players = {
    Player1: "<svg class=\"circle\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"></path>\n        </svg>",
    Player2: "<svg class=\"cross\" viewBox=\"0 0 24 24\">\n                              <path fill=\"currentColor\" d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"></path>\n                      </svg>"
  };
  var positionArr = placeContent();

  var stateCheck = function stateCheck() {
    var Winner1 = positionArr[0].innerHTML === Players.Player1 && positionArr[1].innerHTML === Players.Player1 && positionArr[2].innerHTML === Players.Player1 || positionArr[2].innerHTML === Players.Player1 && positionArr[5].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[6].innerHTML === Players.Player1 && positionArr[7].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[3].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[5].innerHTML === Players.Player1 || positionArr[0].innerHTML === Players.Player1 && positionArr[3].innerHTML === Players.Player1 && positionArr[6].innerHTML === Players.Player1 || positionArr[1].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[7].innerHTML === Players.Player1 || positionArr[0].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[2].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[6].innerHTML === Players.Player1;
    var Winner2 = positionArr[0].innerHTML === Players.Player2 && positionArr[1].innerHTML === Players.Player2 && positionArr[2].innerHTML === Players.Player2 || positionArr[2].innerHTML === Players.Player2 && positionArr[5].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[6].innerHTML === Players.Player2 && positionArr[7].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[3].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[5].innerHTML === Players.Player2 || positionArr[0].innerHTML === Players.Player2 && positionArr[3].innerHTML === Players.Player2 && positionArr[6].innerHTML === Players.Player2 || positionArr[1].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[7].innerHTML === Players.Player2 || positionArr[0].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[2].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[6].innerHTML === Players.Player2;
    var tie = round.length === 10;
    return {
      Winner1: Winner1,
      Winner2: Winner2,
      tie: tie
    };
  };

  var stateEffect = function stateEffect() {
    var winP1 = function winP1() {
      document.body.innerHTML = "<div class=\"win\"><p>Player 1 has Won, congratulations!</p><p>X</p></div>";
    };

    var winP2 = function winP2() {
      document.body.innerHTML = "<div class=\"win2\"><p>Player 2 has Won, congratulations!</p><p>O</p></div>";
    };

    var tie = function tie() {
      document.body.innerHTML = "<div class=\"tie\"><p>Tie!</p></div>";
    };

    return {
      winP1: winP1,
      winP2: winP2,
      tie: tie
    };
  };

  var readingArr = function readingArr() {
    var _loop = function _loop(i) {
      positionArr[i].addEventListener("click", function () {
        if (round.length % 2 === 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player1;
        } else if (round.length % 2 !== 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player2;
        } else {
          round.push("empty");
        }

        if (stateCheck().Winner1) {
          stateEffect().winP2();
        } else if (stateCheck().Winner2) {
          stateEffect().winP1();
        }

        if (stateCheck().tie) {
          stateEffect().tie();
        }
      });
    };

    for (var i = 0; i < positionArr.length; i += 1) {
      _loop(i);
    }
  };

  return {
    readingArr: readingArr,
    round: round
  };
};

logic().readingArr();