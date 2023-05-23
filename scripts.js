function getGrid(columns, rows) {
  const gridContainer = document.getElementById("grid-container");
  let grid = document.createElement("div");
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  grid.className = "grid";

  const columnWidth = `calc(600px / ${columns})`;
  for (let i = 0; i < columns; ++i) {
    let column = document.createElement("div");
    column.className = "column";
    column.style.width = columnWidth;
    for (let j = 0; j < rows; ++j) {
      const rowHeight = `calc(600px / ${rows})`;
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.style.height = rowHeight;

      column.appendChild(cell);
    }
    grid.appendChild(column);
  }
  gridContainer.appendChild(grid);
}
 
function chooseColour() {
  const cellLoop = document.getElementsByClassName("cell");
  let colour = document.getElementById('colour-picker').value;
  for (let i = 0; i < cellLoop.length; i++) {
    cellLoop[i].addEventListener("mouseover", function () {
      cellLoop[i].style.backgroundColor = colour;
    });
  }
}


function rainbow() {
  const cellLoop = document.getElementsByClassName("cell");
  for (let i = 0; i < cellLoop.length; i++) {
    cellLoop[i].addEventListener("mouseover", function () {
      cellLoop[i].style.backgroundColor = getRandomColour();
    });
  }
}

function whiteToBlack() {
  const cellLoop = document.getElementsByClassName("cell");
  for (let i = 0; i < cellLoop.length; i++) {
    cellLoop[i].addEventListener("mouseover", function () {
      cellLoop[i].style.backgroundColor = "rgb(255, 255, 255)";
      cellLoop[i].style.opacity =
        parseFloat(cellLoop[i].style.opacity || 1) - 0.1;
    });
  }
}

function getRandomColour() {
  let letters = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

function changeGridSize() {
  const clearContainer = document.getElementById("grid-container");
  clearContainer.innerHTML = "";
  let size = prompt("Please enter a number between 1 and 100");
  if (size < 1 || size > 100 || isNaN(size) === true) {
    alert("Input invalid! please enter a number between 1 and 100");
    size = 16;
  }
  getGrid(size, size);
}

getGrid(16, 16);
