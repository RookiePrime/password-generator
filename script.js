// Array containing all the possible password characters in separate arrays
var charArrays = [ [], [], [
    " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"
  ],
  [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ]
]
// A partner array containing the booleans for password criteria
var hasChars = [false, false, false, false]
// Generation of the contents of the lower and upper letters arrays. Saved some time, y'know?
for (let i = 0; i < 26; i++) {
  charArrays[0][i] = String.fromCharCode(97 + i);
}
for (let i = 0; i < charArrays[0].length; i++) {
  charArrays[1][i] = charArrays[0][i].toUpperCase();
}

// A function that can pick a random value from any of the above arrays
function pickItem(arr) {
  var randoNum = Math.floor(Math.random() * arr.length);
  return arr[randoNum];
}

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


function assemblePassword(passLength) {
  var password = "";
  var totalOptions = [];

  // Loops through all the provided boolean values and creates a super list to pull all possible characters from
  for (let i = 0; i < 4; i++) {
    if (hasChars[i]) {
      totalOptions = totalOptions.concat(charArrays[i]);
    }
  }
  // Then for the length of the password, pick one symbol from the big list above
  for (let i = 0; i < passLength; i++) {
    password = password.concat(pickItem(totalOptions));
  }

  return password;
}

// Assignment code here
function generatePassword() {
  //  Make sure it's a valid length; 8 to 128 characters
  var passLength = lengthCheck();
  // Should it have lowercase letters?
  hasChars[0] = window.confirm("Do you want lowercase letters in the password?");
  // Should it have uppercase letters?
  hasChars[1] = window.confirm("Do you want uppercase letters in the password?");
  // Should it have numbers?
  hasChars[3] = window.confirm("Do you want numbers in the password?");
  // Should it have special characters?
  hasChars[2] = window.confirm("Do you want special characters in the password?");

  // Time to make the password based on the prompts!
  var password = assemblePassword(passLength);

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
