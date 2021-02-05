// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*+=/?";
var password = []


// Write password to the #password input
function writePassword() {
    var confirm1 = confirm("Uppercase letters?")
    console.log(confirm1);
    
//     if (confirm1 === true) {
//     var password = []
//     password.push(upperCase)     
// }
// console.log(password)

    var confirm2 = confirm("Lowercase letters?")
    console.log(confirm2);

    var confirm3 = confirm("Numbers?")
    console.log(confirm3);

    var confirm4 = confirm("Special Characters?")
    console.log(confirm4);

    var confirm5 = prompt("Pick a length between 8-128")
    console.log(confirm5)

    return password;
}


// var password = generatePassword()
function generatePassword() {

    


    var password = generatePassword()
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



















