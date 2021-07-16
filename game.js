let difficultyChoice = sessionStorage.getItem("diff");
let p1nameData = sessionStorage.getItem("p1name");
let p2nameData = sessionStorage.getItem("p2name");

let turnLabel = document.getElementById('label');
let turnBtn = document.getElementById('btnEndTurn');

console.log(difficultyChoice);
console.log(p1nameData);
console.log(p2nameData);
let p1Turn = true;

turnLabel.innerHTML = `${p1nameData}'s Turn`

const handleClick = evt => {
    if(p1Turn === true){
        p1Turn = false;
        turnLabel.innerHTML = `${p2nameData}'s Turn`;
    }
    else if(p1Turn === false){
        p1Turn = true;
        turnLabel.innerHTML = `${p1nameData}'s Turn`;
    }

};

turnBtn.addEventListener('click', handleClick);
