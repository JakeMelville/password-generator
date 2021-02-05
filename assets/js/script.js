// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialChar = "!@#$%^&*+=/?".split("");
var password = "";

// Write password to the #password input
function passwordCriteria() {

    var confirmLength = parseInt(prompt("Pick a length between 8-128")); //converted answer from string to int
    console.log(confirmLength);

    if (isNaN(confirmLength) === true) {
        alert("Password must be a number.")
        return passwordCriteria(); //if the input is not a number or not within 8-128, the function will restart
    }
    if (confirmLength < 8 || confirmLength > 128) {
        alert("Must be between 8-128 characters")
        return passwordCriteria();
    }

    var confirmUpper = confirm("Uppercase letters?")
    console.log(confirmUpper);
    
    var password = [];
    if (confirmUpper) {
     password = password + upperCase;   
    }
    else {password = password};

    var confirmLower = confirm("Lowercase letters?")
    console.log(confirmLower);

    if (confirmLower) {
        password = password + lowerCase;   
       }
       else {password = password};

    var confirmNumbers = confirm("Numbers?")
    console.log(confirmNumbers);

    if (confirmNumbers) {
        password = password + numbers;   
       }
       else {password = password};

    var confirmSpecial = confirm("Special Characters?")
    console.log(confirmSpecial);

    if (confirmSpecial) {
        password = password + specialChar;   
       }
       else {
           password = password;
        };

    window.globalConfirmLength = confirmLength; 
    window.globalPassword = password;
   
    if (confirmUpper === false && confirmLower === false && confirmNumbers === false && confirmSpecial === false) {
        alert("Must select criteria for password")
        return passwordCriteria();
    }
    return password;
}
//ran these console logs to ensure i have the right data types
console.log(passwordCriteria());
console.log(globalConfirmLength)
console.log(typeof globalConfirmLength);
console.log(globalPassword);



for (j = 0; j <= globalConfirmLength; j++){
function passwordContents(){
    var index = Math.floor(Math.random() * globalConfirmLength);
    var finalPass = globalPassword[index];
    return finalPass;
}    
};

console.log(passwordContents());





