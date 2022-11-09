// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page





// Assignment Code
var generateBtn = document.querySelector("#generate");

//password generator
function generatePassword() {
    //ask length from user store in askLength
    var promptLength = window.prompt("How many characters would you like in your password (8 - 128)");
    //if not a number return
    if (isNaN(promptLength)) {
        window.alert("Must be a number between 8 and 128");
        return;
    }
    //if outside length parameters return
    if (promptLength < 8 || promptLength > 128) {
        window.alert("Please choose a number between 8 and 128");
        return;
    }
    //ask for char types
    var promptNumbers = window.confirm("Would you like your password to include numbers?");
    var promptLowercase = window.confirm("Would you like your password to include lowercase letters?");
    var promptUppercase = window.confirm("Would you like your password to include uppercase letters?");
    var promptSpecial = window.confirm("Would you like your password to include special characters?");
    //arrays of options for each case
    const arLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const arUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const arNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const arSpecial = ["!", "@", "#", "$", "%", "&", "*", "?", "_", "-", "^"];
    //define master list of chars
    var masterList = [];
    //add each list to master list if user selects it
    if (promptNumbers === true) {
        var masterList = arNumbers.concat(masterList);
    }
    if (promptLowercase === true) {
        var masterList = arLowercase.concat(masterList);
    }
    if (promptUppercase === true) {
        var masterList = arUppercase.concat(masterList);
    }
    if (promptSpecial === true) {
        var masterList = arSpecial.concat(masterList);  
    }
    //if no choices were selected 
    if (!promptSpecial && 
        !promptUppercase && 
        !promptLowercase && 
        !promptNumbers) {
            window.alert("You must select at least one character type. Lowercase letters were selected as a default")
            var masterList = arLowercase.concat(masterList);
    } 
    
    //shuffles the main list of chosen chars
    masterList.sort(() => Math.random() - 0.5);
    //sets length of password as a slice of the masterList starting at 0
    var postList = masterList.slice(0, promptLength);
    //combines the array into a single string
    var finalPass = (postList.join(''));
        
    // console.log("Password length is " + promptLength);
    // console.log("masterList is " + masterList);
    // console.log("postList is " + postList);
    // console.log("finalPass is " + finalPass);

    //sends final password out
    return(finalPass);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);