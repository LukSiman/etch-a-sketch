const container = document.querySelector('#container');
let squares = document.querySelectorAll('.squares');

//let firstTime = true;

//if(firstTime){
    makeGrid(16); // initial grid
  //  firstTime = false;
//}

function makeGrid(size){
    container.innerHTML = '';

    container.style.gridTemplateRows = `repeat(${size}, 30px)`;
    container.style.gridTemplateColumns = `repeat(${size}, 30px)`;

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

    while(size <= 0 || size > 100){

    size = prompt('How many squares per side would you like?');

        if(size > 100){
            alert('Please enter 100 or less!');
        }
    }

    makeGrid(size);

    container.style.gridTemplateRows = `repeat(${size}, 30px)`;
    container.style.gridTemplateColumns = `repeat(${size}, 30px)`;

    squares.forEach(div => {
        div.style.backgroundColor = 'white'
    });
});