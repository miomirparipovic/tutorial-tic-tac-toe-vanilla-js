const X_CLASS = "x";
const O_CLASS = "o";
const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let xTurn = true;
let counter = 8;

const cells = document.querySelectorAll(".cell");
const board = document.getElementById("board");

startGame();

function startGame() {
  board.classList.add(X_CLASS);
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick, {
      once: true,
    });
  });
}

function handleClick(e) {
  // place the mark
  const cell = e.target;
  const currentClass = xTurn ? X_CLASS : O_CLASS;
  placeSymbol(cell, currentClass);

  // check for win
  if (checkForWin(currentClass)) {
    console.log(`winner is ${currentClass}`);
  }

  // check for draw
  checkForDraw();

  // switch turns
  xTurn = switchTurns(xTurn);

  // set hover symbol based on turn
  setSymbolHover();
}

function placeSymbol(cell, currentClass) {
  cell.classList.add(currentClass);
}

function checkForDraw() {
  if (!counter) {
    let msgWindow = document.getElementById("message-wrapper");
    msgWindow.classList.add("show");
  }

  counter--;
}

function checkForWin(currentClass) {
  return WIN_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function switchTurns(turn) {
  return !turn;
}

function setSymbolHover() {
  board.classList.remove(X_CLASS);
  board.classList.remove(O_CLASS);

  if (xTurn) {
    board.classList.add(X_CLASS);
  } else {
    board.classList.add(O_CLASS);
  }
}
