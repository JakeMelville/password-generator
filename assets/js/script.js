// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*+=/?";
var password = [upperCase, lowerCase, numbers, specialChar]

// Write password to the #password input
function writePassword() {
   
    var confirm1 = confirm("Uppercase letters?")
    console.log(confirm1);

    var confirm2 = confirm("Lowercase letters?")
    console.log(confirm2);

    var confirm3 = confirm("Numbers?")
    console.log(confirm3);

    var confirm4 = confirm("Special Characters?")
    console.log(confirm4);

    var confirm5 = prompt("Pick a length between 8-128")
    console.log(confirm5)

    var selections = [confirm1, confirm2, confirm3, confirm4, confirm5]
    return selections;
}
console.log(writePassword());
// console.log(password)

// function passwordContents() {

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















