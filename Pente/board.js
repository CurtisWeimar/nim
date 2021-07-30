const X_CLASS = 'x';
const JACK_CLASS = 'jack'
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById("board");
const winningDiv = document.getElementById("winningMessage");
let p2Turn;

//Board array
let boardArray = new Array(19);

for(var x = 0; x < 19; x++) {
    boardArray[x] = new Array(19);
}

for(var x = 0; x < 19; x++) {
    for(var y = 0; y < 19; y++) {
        boardArray[x][y] = null;
    }
}

// console.log(boardArray);
// boardArray[12][12] = 0;
// console.log(boardArray[12][12]);
// console.log(boardArray);

startGame();

function startGame(){
    p2Turn = false;
    cellElements.forEach(cell=> {
        cell.addEventListener('click', handleClick, { once: true})
    });
    setBoardHoverClass()
}

function handleClick(evt) {
    //mark placement
    const cell = evt.target;
    const currentClass = p2Turn ? JACK_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    
    //Get array location
    var id = cell.id;
    var chars = id.split('-');
    var y = chars[0]
    var x = chars[1]

    //Shove into array
    if(currentClass == JACK_CLASS) {
        boardArray[x][y] = 1;
    } else if(currentClass == X_CLASS) {
        boardArray[x][y] = 0;
    }
    // console.log(boardArray);
    // console.log(x + ", " + y);

    //Check captures

    //Check wins

    //Horizontal
    var increment = 0;
    for(var x = 0; x < 19; x++) {

        //Get a piece that isn't null
        var checkPiece;
        do {
            checkPiece = boardArray[x][increment];
            if(checkPiece == null) {
                increment++;
            }
        } while(checkPiece == null && increment < 19);

        var count = 0;
        for(var y = 0; y < 19; y++) {
            if(boardArray[x][y] == checkPiece && checkPiece != null) {
                count++;
                //console.log(`${boardArray[x][y]} was found at ${x},  ${y}`);
                //console.log("Found " + count + " pieces in a row")

                if(count > 4) {
                    console.log("Vertical win!");
                    declareWin(checkPiece);
                }
            } else {
                count = 0;
            }
        }
        increment = 0;
    }

    increment = 0;

    //Vertical check
    //Go across each row
    for(var y = 0; y < 19; y++) {
        var checkPiece;
        do {
            checkPiece = boardArray[increment][y];
            if(checkPiece == null) {
                increment++;
            }
        } while(checkPiece == null && increment < 19);

        var count = 0;
        for(var x = 0; x < 19; x++) {
            if(boardArray[x][y] == checkPiece && checkPiece != null) {
                count++;
                //console.log(`${boardArray[x][y]} was found at ${x},  ${y}`);
                //console.log("Found " + count + " pieces in a row")
                if(count > 4) {
                    console.log("Horizontal win");
                    declareWin(checkPiece);
                    break;
                }
            } else {
                count = 0;
            }
        }

        increment = 0;
    }

    //Diagonal down right check
    increment = 0;
    for(var x = 0; x < 19; x++) {
        var checkPiece;
        do {
            checkPiece = boardArray[x][increment];
            if(checkPiece == null) {
                increment++;
            }
        } while(checkPiece == null && increment < 19);

        var right = x;
        var count = 0;
        for(var y = increment; y < 19; y++) {
            if(right > 18) {
                break;
            }
            if(boardArray[right][y] == checkPiece && checkPiece != null) {
                count++;
                // console.log(`${boardArray[right][y]} at ${x}, ${y}`)
                // console.log(right)
                if(count > 4) {
                    console.log("Down right win");
                    declareWin(checkPiece);
                    break;
                }
            } else {
                count = 0;
            }

            right++;
        }
        increment = 0;
    }

    //Down left diagonal check
    increment = 0;
    for(var x = 18; x > 0; x--) {
        var checkPiece

        do {
            checkPiece = boardArray[x][increment];
            if(checkPiece == null) {
                increment++;
            }
        } while(checkPiece == null && increment < 19);

        var left = x;
        var count = 0;
        for(var y = increment; y < 19; y++) {
            if(left < 0) {
                break;
            }
            if(boardArray[left][y] == checkPiece && checkPiece != null) {
                count++;
                if(count > 4) {
                    console.log("Down left win");
                    declareWin(checkPiece);
                    break;
                }
            } else {
                count = 0;
            }
            left--;
        }
        increment = 0;
    }

    //Turn Switch
    swapTurns();
    setBoardHoverClass();
}



function declareWin(checkPieces) {
    winningDiv.classList.add("show");
    if(checkPieces == 0) {
        winningDiv.innerHTML("Player 1 wins");
    } else {
        winningDiv.innerHTML("Player 2 wins");
    }
    
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