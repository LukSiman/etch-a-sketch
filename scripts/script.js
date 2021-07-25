const container = document.querySelector('#container');
let squares = document.querySelectorAll('.squares');
const gridSize = 480;

makeGrid(16); // initial grid


function makeGrid(size){
    container.innerHTML = '';

    container.style.gridTemplateRows = `repeat(${size}, ${gridSize/size}px)`;
    container.style.gridTemplateColumns = `repeat(${size}, ${gridSize/size}px)`;

    for (let i = 1; i <= size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('squares');
        container.appendChild(div);
    }

    squares = document.querySelectorAll('.squares');

    squares.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'black'
        });
    });
}


const button = document.querySelector('button');

button.addEventListener('click', () => {
    size = 0;

    while(size <= 0 || size > 64){

    size = prompt('How many squares per side would you like?');

        if(size > 64){
            alert('Please enter 64 or less!');
        }
    }

    makeGrid(size);

    container.style.gridTemplateRows = `repeat(${size}, ${gridSize/size}px)`;
    container.style.gridTemplateColumns = `repeat(${size}, ${gridSize/size}px)`;

    squares.forEach(div => {
        div.style.backgroundColor = 'white'
    });
});