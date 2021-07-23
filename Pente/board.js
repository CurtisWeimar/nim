const X_CLASS = 'x';
const JACK_CLASS = 'jack'
const cellElements = document.querySelectorAll('[data-cell]');
let p2Turn;

cellElements.forEach(cell=> {
    cell.addEventListener('click', handleClick, { once: true})
})

function handleClick(evt) {
    //mark placement
    const cell = evt.target;
    const currentClass = p2Turn ? JACK_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    

    //Turn Switch
    swapTurns();
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns() {
    p2Turn = !p2Turn;
}