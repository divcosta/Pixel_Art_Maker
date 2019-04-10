// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submit = document.querySelector('input[type = "submit"]');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const table = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
let rowNumber;
let columnNumber;
let ev;

function makeGrid() {
    if (columnNumber > 70 || rowNumber > 45) { 
        window.alert('Maximum Height is 45 and maximum width is 70.');
    } 
    else {
        let cellId = 0
        for (let i = 1; i <= rowNumber; i++) {
            let rows = document.createElement('tr');
            for (let x = 1; x <= columnNumber; x++) {
                let columns = document.createElement('td');
                columns.addEventListener('click', function (evt) {
                    ev = evt;
                    evt.preventDefault();
                    paint();
                })
                columns.setAttribute('id', 'cell' + cellId);
                cellId++;
                rows.appendChild(columns);
            }
            table.appendChild(rows);
        }
    }
}

function paint() {
    console.log(ev);
    ev.target.style.backgroundColor = colorPicker.value;
}

function clearGrid() {
    if (table.childElementCount > 0) {
        while (table.childElementCount > 0) {
            table.removeChild(table.querySelector('tr'));
        }
    }
}

const submitClick = submit.addEventListener('click', function (event) {
    event.preventDefault();
    clearGrid();
    rowNumber = height.value;
    columnNumber = width.value;
    makeGrid();
});