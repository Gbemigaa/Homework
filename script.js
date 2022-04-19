// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()+"

var allCharacters = null

var generatePassword = function() {
var wordLength = window.prompt ("How many characters would you like?");
if(wordLength < 8 || wordLength > 128) {
window.alert ("Please enter a number between 8 and 128.")
generatePassword();
} else {
var lowerCaseConfirm = window.confirm("Would you like to include some lower case letters?");
var upperCaseConfirm = window.confirm ("Would you like to include some upper case letters?");
var numbersConfirm = window.confirm ("Would you like to include some numbers?");
var specialCharConfirm = window.confirm("Would you like to include some sepcial characters?");
if (lowerCaseConfirm == true) {
allCharacters = allCharacters + lowerCase;}
if (upperCaseConfirm == true) {
allCharacters = allCharacters + upperCase;}
if (numbersConfirm == true){
allCharacters = allCharacters + numbers;}
if (specialCharConfirm == true) {
allCharacters = allCharacters + specialChars;}
if (!allCharacters) {
alert ("Please select an option to include!");
generatePassword();
}
console.log(allCharacters);
}
var generatedPass = ""
for(var i = 0; i < wordLength; i++){
    var value = Math.floor(Math.random() * allCharacters.length);
    generatedPass = generatedPass + allCharacters[value]
}
console.log(allCharacters[value]);
console.log(generatedPass);
return generatedPass;
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

writePassword();
