
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
}
