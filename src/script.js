const cells = document.querySelectorAll(".cell");

function handleClick(e) {
  console.log("clicked", e);
}

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, {
    once: true,
  });
});
