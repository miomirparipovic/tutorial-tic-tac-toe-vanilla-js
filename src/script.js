const X_CLASS = "x";
const O_CLASS = "o";
let xTurn = "true";

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, {
    once: true,
  });
});

function handleClick(e) {
  //   console.log("clicked", e);
  // place the mark
  const cell = e.target;
  const currentClass = xTurn ? X_CLASS : O_CLASS;
  placeSymbol(cell, currentClass);

  // check for win
  // check for draw
  // switch turns
}

function placeSymbol(cell, currentClass) {
  //   console.log("mark");
  cell.classList.add(currentClass);
}
