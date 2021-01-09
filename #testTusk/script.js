var rowValue = document.getElementById('row').value;

var columnValue = document.getElementById('column').value;

console.log(rowValue);
const container = document.getElementById('container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    cell.innerText = Math.floor(Math.random() * 1000);
    container.appendChild(cell).className = 'grid-item';
  }
}

makeRows(rowValue, columnValue);
