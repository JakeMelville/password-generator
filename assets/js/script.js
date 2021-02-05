// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*+=/?";
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
       else {password = password};


    var selections = [confirmUpper, confirmLower, confirmNumbers, confirmSpecial];
    if (selections[0, 1, 2, 3] === false) {
        alert("Must select criteria for password")
        return passwordCriteria();
    }
    return password;
}
function generatePassword(){
    
}


console.log(passwordCriteria());
console.log(typeof password)

// function passwordContents() {
//     return globalSelections.filter(item => item !==false) //filters out false values
// };

// console.log(passwordContents());

// console.log(globalSelections[2])








// passwordContents();
// console.log(password)






// var password = generatePassword()
// function writePassword() {




//     var password = generatePassword()
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);












// window.globalSelections = selections;
// window.globalConfirm5 = confirmLength; 


