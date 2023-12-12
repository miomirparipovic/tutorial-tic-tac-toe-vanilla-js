const X_CLASS = "x";
const O_CLASS = "o";
let xTurn = true;
let counter = 8;

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, {
    once: true,
  });
});

function handleClick(e) {
  // place the mark
  const cell = e.target;
  const currentClass = xTurn ? X_CLASS : O_CLASS;
  placeSymbol(cell, currentClass);

  // check for win

  // check for draw
  checkForDraw();

  // switch turns
  xTurn = switchTurns(xTurn);
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

function switchTurns(turn) {
  return !turn;
}
