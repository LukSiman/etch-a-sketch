const container = document.querySelector('#container');
let squares = document.querySelectorAll('.squares');
const gridSize = 480; // total grid size width and height in px
const maximumSquares = 64; // maximum of allowed squares per side
const initialSize = 16; // initial square amount for a side ofthe grid

const colorButton = document.querySelector('#changeColor');
let colorChanged = false;

makeGrid(initialSize); // initial grid

// creates a grid of required size
function makeGrid(size) {
    container.innerHTML = ''; // removes all child divs

    setColumnsAndRows(size);

    for (let i = 1; i <= size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('squares');
        container.appendChild(div);
    }

    colorButton.textContent = 'Rainbow';
    colorChanged = false;
    
    paintSquares();
}

// creates required rows and columns for the grid
function setColumnsAndRows(size) {
    container.style.gridTemplateRows = `repeat(${size}, ${gridSize / size}px)`;
    container.style.gridTemplateColumns = `repeat(${size}, ${gridSize / size}px)`;
}

// add EventListener to the squares to paint them black
function paintSquares() {
    squares = document.querySelectorAll('.squares');

    squares.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'black';
        });
    })
}

// add EventListener to the squares to paint them rainbow
function paintRainbowSquares() {
    squares = document.querySelectorAll('.squares');

    squares.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = randomRGB();
        });
    });
}

const clearButton = document.querySelector('#clear');

// clears the grid without changing size
clearButton.addEventListener('click', () => {
    clearGrid();
});

// clears the grid from painted squares
function clearGrid() {
    squares.forEach(div => {
        div.style.backgroundColor = 'white';
    });
}

// returns a random RGB value
function randomRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// changes the color
colorButton.addEventListener('click', () => {
    if (colorChanged) {
        colorButton.textContent = 'Rainbow';
        colorChanged = false;
        paintSquares();
    } else {
        colorButton.textContent = 'Black';
        colorChanged = true;
        paintRainbowSquares();
    }
});

const sizeButton = document.querySelector('#changeSize');

// asks user for new size of the grid and sets grid to it
sizeButton.addEventListener('click', () => {
    size = 0;
    while (size <= 0 || size > maximumSquares) {
        size = prompt('How many squares per side would you like?');
        if (size > maximumSquares) {
            alert(`Please enter ${maximumSquares} or less!`);
        }
    }

    makeGrid(size);
    setColumnsAndRows(size);
    clearGrid();
});