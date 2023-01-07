"use strict";

var placeContent = function placeContent() {
  var placeArr = [];

  for (var i = 1; i <= 9; i++) {
    var place = ".spot" + i;
    var Htmlplace = document.querySelector(place);
    placeArr.push(Htmlplace);
  }

  return placeArr;
};

var Players = {
  Player1: "<svg class=\"circle\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\"></path>\n  </svg>",
  Player2: "<svg class=\"cross\" viewBox=\"0 0 24 24\">\n                        <path fill=\"currentColor\" d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"></path>\n                </svg>"
};
var arrL = []; // 0 1 2
// 3 4 5
// 6 7 8

var logic = function logic() {
  var positionArr = placeContent();

  var winCheck = function winCheck() {
    var Winner1 = positionArr[0].innerHTML === Players.Player1 && positionArr[1].innerHTML === Players.Player1 && positionArr[2].innerHTML === Players.Player1 || positionArr[2].innerHTML === Players.Player1 && positionArr[5].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[6].innerHTML === Players.Player1 && positionArr[7].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[3].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[5].innerHTML === Players.Player1 || positionArr[0].innerHTML === Players.Player1 && positionArr[3].innerHTML === Players.Player1 && positionArr[6].innerHTML === Players.Player1 || positionArr[1].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[7].innerHTML === Players.Player1 || positionArr[0].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[8].innerHTML === Players.Player1 || positionArr[2].innerHTML === Players.Player1 && positionArr[4].innerHTML === Players.Player1 && positionArr[6].innerHTML === Players.Player1;
    var Winner2 = positionArr[0].innerHTML === Players.Player2 && positionArr[1].innerHTML === Players.Player2 && positionArr[2].innerHTML === Players.Player2 || positionArr[2].innerHTML === Players.Player2 && positionArr[5].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[6].innerHTML === Players.Player2 && positionArr[7].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[3].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[5].innerHTML === Players.Player2 || positionArr[0].innerHTML === Players.Player2 && positionArr[3].innerHTML === Players.Player2 && positionArr[6].innerHTML === Players.Player2 || positionArr[1].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[7].innerHTML === Players.Player2 || positionArr[0].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[8].innerHTML === Players.Player2 || positionArr[2].innerHTML === Players.Player2 && positionArr[4].innerHTML === Players.Player2 && positionArr[6].innerHTML === Players.Player2;
    return {
      Winner1: Winner1,
      Winner2: Winner2
    };
  };

  var winEffect = function winEffect() {
    var winP1 = function winP1() {
      document.body.innerHTML = "<div class=\"win\"><p>Player 1 has Won, congratulations!</p><p>X</p></div>";
    };

    var winP2 = function winP2() {
      document.body.innerHTML = "<div class=\"win2\"><p>Player 2 has Won, congratulations!</p><p>O</p></div>";
    };

    return {
      winP1: winP1,
      winP2: winP2
    };
  };

  var readingArr = function readingArr() {
    var _loop = function _loop(round) {
      positionArr[round].addEventListener("click", function () {
        arrL.push("empty");

        if (arrL.length % 2 === 0) {
          positionArr[round].innerHTML = Players.Player1;
        } else {
          positionArr[round].innerHTML = Players.Player2;
        }

        if (winCheck().Winner1) {
          winEffect().winP2();
        } else if (winCheck().Winner2) {
          winEffect().winP1();
        }
      });
    };

    for (var round = 0; round < positionArr.length; round++) {
      _loop(round);
    }
  };

  return {
    readingArr: readingArr,
    arrL: arrL
  };
};

var caller = logic();
caller.readingArr();