// Assignment Code
var generateBtn = document.querySelector("#generate");
var hasUpper;
var hasLower;
var hasNumber;
var hasSymbol;

//4 criteria random function
function RandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function RandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function RandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function RandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//Object of 4 criteria
var randomFunc = {
    upper: RandomUpper,
    lower: RandomLower,
    number: RandomNumber,
    symbol: RandomSymbol
}

//Generate password function
function generatePassword(upper, lower, number, symbol, length) {
    var generatedPassword = '';
    var typesCount = upper + lower + number + symbol;
    var typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

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
    hasUpper = confirm("Would you like to include Uppercase Letters?");
    hasLower = confirm("Would you like to include Lowercase Letters?");
    hasNumber = confirm("Would you like to include Numbers?");
    hasSymbol = confirm("Would you like to include Symbols?");

    var length = 1
    while (length < 8 || length > 128) {
        length = prompt("Please choose password length between 8 and 128.");
    }

    var password = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


