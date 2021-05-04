
// Lowercase letters array, assembled less-than-painstakingly via loop
var lowerLetters = [];
for (let i = 0; i < 26; i++) {
  lowerLetters[i] = String.fromCharCode(97 + i);
}

// Assemble the array for uppercase letters from the lowercase one
var upperLetters = [];
for (let i = 0; i < lowerLetters.length; i++) {
  upperLetters[i] = lowerLetters[i].toUpperCase();
}
// The special characters, including the ones that cause string issues. Done manually 'cause who knows what the code range is to get all these guys?
var specialCharacters = [
" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"
]

function lengthCheck() {
  var passLength = window.prompt("How long should the password be? Type a number between 8 and 128.");
  // If they give me nothing or not a number or too low a number or too high a number, I make them start over! That'll show 'em.
  if (!passLength || !parseInt(passLength)) {
    window.alert("Please type a number. Let's try this again.");
    generatePassword();
  } else if (passLength < 8) {
    window.alert("That's less than 8. Let's try this again.");
    generatePassword();
  } else if (passLength > 128) {
    window.alert("That's more than 32. Let's try this again.");
    generatePassword();
  } else {
    return passLength;
  }
}

function assemblePassword(passLength, hasLowerCase, hasUpperCase, hasNumbers, hasSpecChars) {
  // Randomizes based on options provided.
  for (let i = 0; i < passLength; i++) {

  }

  return 0;
}

// Assignment code here
function generatePassword() {
  //  Make sure it's a valid length; 8 to 128 characters
  var passLength = lengthCheck();
  // Should it have lowercase letters?
  var hasLowerCase = window.confirm("Do you want lowercase letters in the password?");
  // Should it have uppercase letters?
  var hasUpperCase = window.confirm("Do you want uppercase letters in the password?");
  // Should it have numbers?
  var hasNumbers = window.confirm("Do you want numbers in the password?");
  // Should it have special characters?
  var hasSpecChars = window.confirm("Do you want special characters in the password?");

  // Time to make the password based on the prompts!
  var password = assemblePassword(passLength, hasLowerCase, hasUpperCase, hasNumbers, hasSpecChars);

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
