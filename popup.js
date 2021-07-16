var credits_modal = document.getElementById("credits_modal");
var rules_modal = document.getElementById("rules_modal");
var span = document.getElementById("close");

var creditsJustOpened = false;
var rulesJustOpened = false;

function creditsShow(ev) {
    if (ev.target != close){
        credits_modal.style.display = "block";
        creditsJustOpened = true;   
    }
}

function rulesShow(ev) {
    if(ev.target != close) {
        rules_modal.style.display = "block";
        rulesJustOpened = true;
    }
}

// function close() {
//     modal.style.display = "none";
// }

window.onclick = function(event) {
    console.log(credits_modal.style.display);
    if (event.target != credits_modal && !creditsJustOpened) {
      credits_modal.style.display = "none";
    } else {
        creditsJustOpened = false;
    }

    if(event.target != rules_modal && !rulesJustOpened) {
        rules_modal.style.display = "none";
    } else {
        rulesJustOpened = false;
    }

} 