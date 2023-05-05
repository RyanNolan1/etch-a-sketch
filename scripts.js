getGrid(16, 16);

function getGrid(columns, rows) {
  const gridContainer = document.getElementById("grid-container");

  let grid = document.createElement("div");
  grid.className = "grid";
  for (let i = 0; i < columns; ++i) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < rows; ++j) {
      let row = document.createElement("div");
      row.className = "row";

      column.appendChild(row);
    }
    grid.appendChild(column);
  }
  gridContainer.appendChild(grid);

  const rowLoop = document.getElementsByClassName("row");
  for (let i = 0; i < rowLoop.length; i++) {
    rowLoop[i].addEventListener("mouseover", function () {
      rowLoop[i].style.backgroundColor = "red";
    });
  }
}

function changeGridSize() {
  const clearContainer = document.getElementById("grid-container");
  clearContainer.innerHTML = "";
  let size = prompt("Please enter a number between 1 and 100");
  getGrid(size, size);
}
