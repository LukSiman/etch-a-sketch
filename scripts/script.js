const container = document.querySelector('#container');

for(let i = 1; i <= 16*16; i++){
    let div = document.createElement('div');
    div.classList.add('squares');
    container.appendChild(div);
}

const squares = document.querySelectorAll('.squares');

squares.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'black'});
});
