// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);



// Password parameters
var passwordLengthInput = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128:");
console.log(passwordLengthInput + " total length (input)");
console.log(typeof(passwordLengthInput));

var passwordLength = parseInt(passwordLengthInput);
console.log (passwordLength + " total length (converted)")

if (passwordLength < 8 || passwordLength > 128) {
  passwordLengthInput = prompt("Password must be between 8 and 128 characeters. Please try again. Enter a number between 8 and 128:");
  passwordLength = parseInt(passwordLengthInput);
console.log (passwordLength + " total length (converted and updated)")
}

var passwordLower = confirm('Would you like lowercase characters? Select "Okay" for yes or "Cancel" for no:');
console.log(passwordLower + " for lowercase");

var passwordUpper = confirm('Would you like uppercase characters? Select "Okay" for yes or "Cancel" for no:');
console.log(passwordUpper + " for upperecase");

var passwordNumeric = confirm('Would you like numeric characters? Select "Okay" for yes or "Cancel" for no:')
console.log(passwordNumeric + " for numbers")

var passwordSpecial = confirm('Would you like special characters? Select "Okay" for yes or "Cancel" for no:')
console.log(passwordSpecial + " for special characters")




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  
}
