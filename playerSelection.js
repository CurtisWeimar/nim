const btnEasy = document.getElementById('btnEasy');
const btnMedium = document.getElementById('btnMedium');
const btnHard = document.getElementById('btnHard');

let difficultyChoice;

const handleClickDiff = evt => {
    console.log(evt.target.innerHTML);

    if(evt.target.innerHTML === "Play")
    {
        if(difficultyChoice === undefined){
            difficultyChoice = "easy";
        }
    }
    else
    {
        if(evt.target.innerHTML === "Easy")
        {
            btnEasy.style.backgroundColor = "rgb(87, 87, 87)";
            btnMedium.style.backgroundColor = "rgb(206, 206, 206)";
            btnHard.style.backgroundColor = "rgb(206, 206, 206)";
            difficultyChoice = "easy";
        }
        else if(evt.target.innerHTML === "Medium")
        {
            btnEasy.style.backgroundColor = "rgb(206, 206, 206)";
            btnMedium.style.backgroundColor = "rgb(87, 87, 87)";
            btnHard.style.backgroundColor = "rgb(206, 206, 206)";
            difficultyChoice = "medium";
        }
        else if(evt.target.innerHTML === "Hard")
        {
            btnEasy.style.backgroundColor = "rgb(206, 206, 206)";
            btnMedium.style.backgroundColor = "rgb(206, 206, 206)";
            btnHard.style.backgroundColor = "rgb(87, 87, 87)";
            difficultyChoice = "hard";
        }
        sessionStorage.setItem("diff", difficultyChoice);
    }

};

function validateForm() {
    let p1nameFrm = document.getElementById('p1name').value;
    let p2nameFrm = document.getElementById('p2name').value;
    sessionStorage.setItem("p1name", p1nameFrm);
    sessionStorage.setItem("p2name", p2nameFrm);

    console.log(p1nameFrm);
    console.log(p2nameFrm);
    if (p1nameFrm == "" || p2nameFrm == "") {
      alert("Names must be filled out");
      return false;
    }
    else if(difficultyChoice === undefined){
        alert("Difficulty Needs To Be Selected");
        return false;
    }
  }

btnEasy.addEventListener('click', handleClickDiff);
btnMedium.addEventListener('click', handleClickDiff);
btnHard.addEventListener('click', handleClickDiff);