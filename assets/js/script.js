// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*+=/?";
var password = [upperCase, lowerCase, numbers, specialChar]

// Write password to the #password input
function passwordCriteria() {
   
    var confirmUpper = confirm("Uppercase letters?")
    console.log(confirmUpper);

    var confirmLower = confirm("Lowercase letters?")
    console.log(confirmLower);

    var confirmNumbers = confirm("Numbers?")
    console.log(confirmNumbers);

    var confirmSpecial = confirm("Special Characters?")
    console.log(confirmSpecial);

    var confirmLength = prompt("Pick a length between 8-128");
    console.log(confirmLength);

    var selections = [confirm1, confirm2, confirm3, confirm4];
   
    window.globalSelections = selections;
    window.globalConfirm5 = confirm5; 
   
    return selections;
}
console.log(writePassword());

function passwordContents() {
    return globalSelections.filter(item => item !==false) //filters out false values
};

console.log(passwordContents());

console.log(globalSelections[2])








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















