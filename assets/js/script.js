// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")

var upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*+=/?";
var password = "";


// generateBtn.addEventListener("click", passwordCriteria)

generateBtn.onclick = passwordCriteria;

// Write password to the #password input
function passwordCriteria(){

    password = "";
    var confirmLength = parseInt(prompt("Pick a length between 8-128")); //converted answer from string to int
    console.log(confirmLength);

    if (isNaN(confirmLength) === true) {
        alert("Password must be a number.") //alert will pop up when the user did not meet the correct criteria for the prompt
        return passwordCriteria(); //if the input is not a number or not within 8-128, the function will restart
    }
    if (confirmLength < 8 || confirmLength > 128) {
        alert("Must be between 8-128 characters")
        return passwordCriteria();
    }
// below are all og the confirm prompts that will help us make our password
    var confirmUpper = confirm("Uppercase letters?")
    console.log(confirmUpper);
    
    var password = ""; //created an emptry string to store the values of confirmed prompts 
    if (confirmUpper) {
     password = password + upperCase;   
    }
    else {password = password};

    var confirmLower = confirm("Lowercase letters?")
    console.log(confirmLower);
// if this confirm prompt is true, the function will add our lowerCase variable string to our empty string in password
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

     
    // window.globalConfirmLength = confirmLength; //redefined as global varaiable so I can use later in code
    // window.globalPassword = password; //same as above


    if (confirmUpper === false && confirmLower === false && confirmNumbers === false && confirmSpecial === false) {
        alert("Must select criteria for password")
        return passwordCriteria();
    }
    printText(password, confirmLength);
    return; //returns one string of all potential characters that can be used in password.
}
//ran these console logs to ensure i have the right data types
// passwordCriteria;
// console.log(globalConfirmLength)
// console.log(typeof globalConfirmLength);
// console.log(globalPassword.length);



//this function is returning one random number 
function passwordContents(password){
    var index = Math.floor(Math.random() * password.length);
    var finalPass = password[index];
    console.log(finalPass) //this is our random password
    return finalPass; 
    
};

// console.log(passwordContents());
//now taking the above function and looping it using globalConfirmLength. 
//(which was the answer to the first prompt asking how many characters)

var combineCharacters = ""; //empty variable which I will assign our password string to below

function printText(password, confirmLength) {
for (i = 0; i < confirmLength; i++) {
    
    var passwordTextbox = passwordContents(password);
    combineCharacters = combineCharacters + passwordTextbox;
} 
    var myTextArea = document.querySelector("#password"); //using variable textarea I am now changing the textbox in html to the new string stored in combineCharacters
    myTextArea.innerHTML = combineCharacters;
    
    
}    
// console.log(combineCharacters);
// console.log(typeof combineCharacters);
// printText();