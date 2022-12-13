//Stretch goals: set password length, add copy on click and toogle symbols and numbers on/off
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+",
    "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let firstpEl = document.getElementById("firstField");
let secondpEl = document.getElementById("secondField");
let sliderEl = document.getElementById("myRange");
let passLengthEl = document.getElementById("length");

//Runs onload, gets the slider value
function SliderValue() {

    passLengthEl.textContent = sliderEl.value;

    sliderEl.oninput = function () {
        passLengthEl.textContent = this.value;
    }

}

function generatePasswords() {
    let firstPassword = "";
    let secPassword = "";

    for (let i = 0; i < passLengthEl.textContent; i++) {
        let firstRandomNumber = Math.floor(Math.random() * characters.length);
        let secRandomNumber = Math.floor(Math.random() * characters.length);

        firstPassword += characters[firstRandomNumber];
        secPassword += characters[secRandomNumber];
    }

    firstpEl.textContent = firstPassword;
    secondpEl.textContent = secPassword;
}

function copyFirst() {
    // Copy the first password 
    navigator.clipboard.writeText(firstpEl.textContent);

    // Alert the copied text
    alert("Copied the password: " + firstpEl.textContent);
}

function copySecond() {
    //Copy the second password 
    navigator.clipboard.writeText(secondpEl.textContent);

    // Alert the copied text
    alert("Copied the password: " + secondpEl.textContent);
}