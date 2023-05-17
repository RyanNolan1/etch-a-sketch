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
      let row = document.createElement("div");
      row.className = "row";
      row.style.height = rowHeight;

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
  if (size < 1 || size > 100 || isNaN(size) === true) {
    alert("Input invalid! please enter a number between 1 and 100")
    size = 16;
  }
  getGrid(size, size);
}

getGrid(16, 16);
