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



function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}



//password generation function
function generatePassword() {
  //prompt user - store response in var
  var amount = window.prompt('Input desired length of password (8 - 128 chars)');
  //convert response to number
  var passLength = parseInt(amount);
  //if input is not a number give alert message
  if (isNaN(passLength)) {
    window.alert('Thats not a number please return to school :)');
    return;
  } 
  if (passLength < 8 || passLength > 128) {
    window.alert("Password must be between 8 and 128 characters");
    return;
  } 

  var askLowercase = window.confirm("Include lowercase letters in your password?");
  var askUppercase = window.confirm("Include uppercase letters in your password?");
  var askNumbers = window.confirm("Include numbers in your password?");
  var askSpecial = window.confirm("Include special characters in your password?");

  var listLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var listUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var listNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var listSpecial = ["!", "@", "#", "$", "%", "&", "*", "?", "_", "-"];
  //put arrays into container array
  var listPass = []

  //if user wants numbers - include numbers list
  if (askLowercase === true) {
    listPass.push(listLowercase);
  }
  if (askUppercase === true) {
    listPass.push(listUppercase);
  }
  if (askNumbers === true) {
    listPass.push(listNumbers);
  }
  if (askSpecial === true) {
    listPass.push(listSpecial);
  }
  if (listPass.length === 0) {
    listPass.push(listLowercase)
    window.alert("For a more secure password it is recommended to choose more catagories")
  }
  
  //empty string
  var genPass = "";

  for (var i = 0; i < passLength; i++) {
    var randomItem = getRandomItem(listPass)
    var randomChar = getRandomItem(randomItem)
    genPass += randomChar;
  }

  console.log(genPass);
  
  //return to where this function was originally called
  return genPass;
}


// Write password to the #password input
function writePassword() {
  //password = generate password function
  var password = generatePassword();

  //passwordText to be written in the password id
  var passwordText = document.querySelector("#password");

  // change password text to password variable
  passwordText.value = password;

}

// Add event listener to the generate button
//whenever you click button writePassword will run
generateBtn.addEventListener("click", writePassword);
