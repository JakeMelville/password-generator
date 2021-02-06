// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")

var upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*+=/?";
var password = "";
var finalPassword= ""

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

    window.globalConfirmLength = confirmLength; //redefined as global varaiable so I can use later in code
    window.globalPassword = password; //same as above
   
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
console.log(globalPassword.length);



//this function is returning one random number 
function passwordContents(){
    var index = Math.floor(Math.random() * globalPassword.length);
    var finalPass = globalPassword[index];
    return finalPass; 
};

//now taking the above function and looping it using globalConfirmLength. 
//(which was the answer to the first prompt asking how many characters)
var combineCharacters = "";

for (i = 0; i < globalConfirmLength; i++) {
    
    var passwordTextbox = passwordContents();
    combineCharacters = combineCharacters + passwordTextbox;
} 

console.log(combineCharacters)
console.log(typeof combineCharacters)


function textArea() {
    console.log(combineCharacters)
}






