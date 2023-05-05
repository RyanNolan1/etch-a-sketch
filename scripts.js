let columns = 16;
let rows = 16;

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
