// Made by Mr.Epoch as my practice of factory functions and modules in Odin project

// In the logic is all of code used

const Logic = () => {
  // I first made placeContent which will selects all of my div's on which will user click

  const placeContent = () => {
    // it is placed inside of array, then through for loop i pushed 9 locations of html div's inside of my array, then returned it

    let placementArr = [];
    for (let i = 1; i <= 9; i += 1) {
      const place = ".spot" + i;
      const Htmlplace = document.querySelector(place);
      placementArr.push(Htmlplace);
    }
    return placementArr;
  };

  // ElementLocations is object holding important element which will be later used

  const ElementLocations = {
    restart: document.querySelector(".restart"),
    start: document.querySelector(".start"),
    board: document.querySelector(".board"),
    p1NameInput: document.querySelector(".player-1-input"),
    p2NameInput: document.querySelector(".player-2-input"),
    p1Name: document.querySelector(".player1-namespace-para"),
    p2Name: document.querySelector(".player2-namespace-para"),
  };

  // In Object Players there is Player1 and Player2, Player1 is a circle, Player2 is a cross, for visual shapes on board

  const Players = {
    Player1: `<svg class="circle" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
        </svg>`,
    Player2: `<svg class="cross" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                      </svg>`,
  };

  // PlayerNames functions check looks at input name and assigns it, del deletes it when clicked restart, playerName object saves it for later use

  const PlayerNames = () => {
    const playerName = {
      P1: ElementLocations.p1Name.textContent,
      P2: ElementLocations.p2Name.textContent,
    };

    const check = () => {
      if (ElementLocations.p1NameInput.value) {
        ElementLocations.p1Name.textContent =
          ElementLocations.p1NameInput.value;
      }
      if (ElementLocations.p2NameInput.value) {
        ElementLocations.p2Name.textContent =
          ElementLocations.p2NameInput.value;
      }
    };
    const del = () => {
      if (ElementLocations.p1NameInput.value) {
        ElementLocations.p1Name.textContent = '"X is player 1"';
        ElementLocations.p1NameInput.value = "";
      }
      if (ElementLocations.p2NameInput.value) {
        ElementLocations.p2Name.textContent = '"O is player 2"';
        ElementLocations.p2NameInput.value = "";
      }
    };
    return { check, playerName, del };
  };

  // I used here placeContent() and named it positionArr for better readablity, i wanted it to be constant for safer referencing, but it i must reassign it again in my ReadingArr()

  let positionArr = placeContent();

  // Clear is there for situation when user clicks restart button, it will be used later

  const Clear = () => {
    const clearing = `<div class="spot1"></div>
                      <div class="spot2"></div>
                      <div class="spot3"></div>
                      <div class="spot4"></div>
                      <div class="spot5"></div>
                      <div class="spot6"></div>
                      <div class="spot7"></div>
                      <div class="spot8"></div>
                      <div class="spot9"></div>`;
    return { clearing };
  };

  // I made round array for measuring through it's length which player plays, i check with it if tie happened, all block are filled and no one won

  let round = [];

  // StateCheck is really long ... , it checks if there is match of circles or crosses or if if tie happened

  const StateCheck = () => {
    const Winner1 =
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
    const Winner2 =
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
    const tie = round.length === 9 && Winner1 === false && Winner2 === false;
    return { Winner1, Winner2, tie };
  };

  // StateEffect is what happens when StateCheck happened, if circle or cross won, or tie

  const StateEffect = () => {
    const winP1 = () => {
      ElementLocations.board.innerHTML = `<div class="win"><p>${
        PlayerNames().playerName.P1
      } has won, congratulations!</p><p>X</p></div>`;
    };
    const winP2 = () => {
      ElementLocations.board.innerHTML = `<div class="win2"><p>${
        PlayerNames().playerName.P2
      } has won, congratulations!</p><p>O</p></div>`;
    };
    const tie = () => {
      ElementLocations.board.innerHTML = `<div class="tie"><p>Tie!</p></div>`;
    };
    return { winP1, winP2, tie };
  };

  // ReadingArr is place where i use all my blocks to build my code

  const ReadingArr = () => {
    positionArr = placeContent();
    // This array gives event listener to all div's

    for (let i = 0; i < positionArr.length; i += 1) {
      positionArr[i].addEventListener("click", () => {
        // I use odd or even to know which player moves now and check if that place is empty, then i give appropiate object to the place and make array longer

        // Last else is there for case when all is full and i need to make tia and no one won

        if (round.length % 2 === 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player1;
        } else if (round.length % 2 !== 0 && positionArr[i].innerHTML === "") {
          round.push("empty");
          positionArr[i].innerHTML = Players.Player2;
        }
        console.log(round.length);
        // There i use StateCheck and StateEffect

        if (StateCheck().Winner1) {
          StateEffect().winP2();
        } else if (StateCheck().Winner2) {
          StateEffect().winP1();
        } else if (StateCheck().tie) {
          StateEffect().tie();
        }
      });
    }
  };

  // start function is for what happens when someone clicks on start button, it will start ReadingArr() and if chosen name it will give players names

  const start = () => {
    ElementLocations.start.addEventListener("click", () => {
      PlayerNames().check();
      ReadingArr();
    });
  };

  // restart function is for what happens when someone clicks on restart button, it will delete name and position of figures with Clear() and PlayerNames().del()

  const restart = () => {
    ElementLocations.restart.addEventListener("click", () => {
      ElementLocations.board.innerHTML = Clear().clearing;
      PlayerNames().del();
      round = [];
    });
  };
  // I return ReadingArr to make it public function

  return { ReadingArr, ElementLocations, start, restart };
};

// There i use my Logic() and name it as TicTacToe

const TicTacToe = Logic();

// TicTacToe what happens when someone clicks on start button

TicTacToe.start();

// TicTacToe what happens when  someone clicks on restart button

TicTacToe.restart();
