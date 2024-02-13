const myForm = document.getElementById("Form");
const goodLet = document.getElementById("goodLet");
const goodCap = document.getElementById("goodCap");
const goodNum = document.getElementById("goodNum");
const goodSym = document.getElementById("goodSym");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const naissance = document.getElementById("naissance");
const subButton = document.getElementById("subButton");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    const butType = togglePassword.textContent === "Show" ? "Hide" : "Show";
    togglePassword.textContent = butType;
});


function passCheck(){
    var password = document.getElementById("password").value;
    const lenCheck = password.length >= 8;
    const capCheck = /[A-Z]/.test(password);
    const numCheck = /\d/.test(password);
    const symCheck = /[!@#$%^'"/=:.?<>&,;*()_+-]/.test(password);
        if(lenCheck){
            goodLet.style.color = "black";
        }else {
            goodLet.style.color = "white";
        }
        if(capCheck) {
            goodCap.style.color = "black";
        }else {
            goodCap.style.color = "white";
        }
        if(numCheck) {
            goodNum.style.color = "black";
        }else {
            goodNum.style.color = "white";
        }
        if (symCheck) {
            goodSym.style.color = "black";
        }else {
            goodSym.style.color = "white";
        }
        
        subButton.addEventListener('click', verifyAll(lenCheck, capCheck, numCheck, symCheck));
    }

function verifyAll(len, cap, num, sym){
    myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(len, cap, num, sym);
    var testDate = naissance.value;
    goodA.textContent = "Date du Naissance";
    var dateToTest = testDate.substring(0, 4);
    console.log (testDate, dateToTest);
    if (parseInt(dateToTest) > 2023){
        goodA.textContent = "Emrah";
    }else if (parseInt(dateToTest) > 2006){
        return goodA.textContent = "BYE BYE";
    
    }else if (testDate = "") {
        return;
    }else{
        if (len && cap && num && sym) {
            document.querySelector("body").style.color = "green";
            setTimeout(function () {
                window.location.href = "#";
            }, 1200);
            
        }
    }

    
});
}