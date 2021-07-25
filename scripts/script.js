const container = document.querySelector('#container');
let squares = document.querySelectorAll('.squares');
const gridSize = 480; // total grid size width and height in px
const maximumSquares = 64 // maximum of allowed squares per side
const initialSize = 16; // initial square amount for a side ofthe grid

makeGrid(initialSize); // initial grid

// creates a grid of required size
function makeGrid(size){
    container.innerHTML = ''; // removes all child divs

    setColumnsAndRows(size);

    for (let i = 1; i <= size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('squares');
        container.appendChild(div);
    }

    paintSquares('black');
}

// creates required rows and columns for the grid
function setColumnsAndRows(size){
    container.style.gridTemplateRows = `repeat(${size}, ${gridSize/size}px)`;
    container.style.gridTemplateColumns = `repeat(${size}, ${gridSize/size}px)`;
}

// add EventListener to the squares to paint them
function paintSquares(color){
    squares = document.querySelectorAll('.squares');

    squares.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = color;
        });
    });
}

// clears the grid from painted squares
function clearGrid(){
    squares.forEach(div => {
        div.style.backgroundColor = 'white'
    });
}

const button = document.querySelector('button');

// asks user for new size of the grid and sets grid to it
button.addEventListener('click', () => {
    size = 0;
    while(size <= 0 || size > maximumSquares){
    size = prompt('How many squares per side would you like?');
        if(size > maximumSquares){
            alert(`Please enter ${maximumSquares} or less!`);
        }
    }

    makeGrid(size);
    setColumnsAndRows(size);
    clearGrid()
});