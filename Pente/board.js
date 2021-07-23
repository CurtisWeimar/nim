const X_CLASS = 'x';
const JACK_CLASS = 'jack'
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById("board");
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
    setBoardHoverClass();
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns() {
    p2Turn = !p2Turn;
}
function setBoardHoverClass(){
    board.classList.remove(X_CLASS);
    board.classList.remove(JACK_CLASS);
    if(p2Turn){
        board.classList.add(JACK_CLASS);
    }
    else{
        board.classList.add(X_CLASS);
    }
}