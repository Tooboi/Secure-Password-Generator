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
    //define list of chosen types
    var chosen = [];
    //add each list to master list if user selects it
    //ps had to add numFix to add the list to the main list enough times
    //that you can get a full 128 char password with just one selection
    //add to list of chosen types for validation
    if (promptNumbers === true) {
        for (var i = 0; i < 13; i++) {
          var masterList = arNumbers.concat(masterList);  
        }
        chosen.push(" numbers")
    }
    if (promptLowercase === true) {
        for (var i = 0; i < 5; i++) {
        var masterList = arLowercase.concat(masterList);            
        }
        chosen.push(" lowercase letters")
    }
    if (promptUppercase === true) {
        for (var i = 0; i < 5; i++) {
        var masterList = arUppercase.concat(masterList);            
        }
        chosen.push(" uppercase letters")
    }
    if (promptSpecial === true) {
        for (var i = 0; i < 12; i++) {
        var masterList = arSpecial.concat(masterList);            
        }
        chosen.push(" special characters")
    } 


    //if no choices were selected 
    if (!promptSpecial && 
        !promptUppercase && 
        !promptLowercase && 
        !promptNumbers) {
            window.alert("You must select at least one character type. Lowercase letters were selected as a default")
            var masterList = arLowercase.concat(masterList);
            chosen.push("lowercase letters")
    } 
    //add strings in chosen array and alert user
    chosen = chosen.join()
    window.alert("Your password will be " + promptLength + " characters long and contain" + chosen + ".")
    //shuffles the main list of chosen chars
    masterList.sort(() => Math.random() - 0.5);
    //sets length of password as a slice of the masterList starting at 0
    var postList = masterList.slice(0, promptLength);
    //combines the array into a single string
    var finalPass = (postList.join(''));
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