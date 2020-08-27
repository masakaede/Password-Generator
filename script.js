// Assignment Code
var generateBtn = document.querySelector("#generate");


//console.log(hasUpperInput, hasLowerInput, hasNumInput, hasSymInput, LengthInput)

//Object of 4 criteria
var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateBtn.addEventListener('click', function () {
    var hasUpper = confirm("Include Uppercase Letters?");
    var hasLower = confirm("Include Lowercase Letters?");
    var hasNumber = confirm("Include Numbers?");
    var hasSymbol = confirm("Include Symbols?");
    var length = prompt("Please choose password length between 8 and 128");
    /*var hasUpper = hasUpperInput;
    var hasLower = hasLowerInput;
    var hasNumber = hasNumInput;
    var hasSymbol = hasSymInput;
    var length = +lengthInput;*/

    password.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);

});


function generatePassword(upper, lower, number, symbol, length) {
    var generatedPassword = '';
    var typesCount = upper + lower + number + symbol;
    var typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    // Doesn't have a selected type
    if (typesCount === 0) {
        return '';
    }

    // create a loop
    for (var i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    var finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}