// Assignment Code
var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  let charAmount = 0;
  let toUpperChars = false;
  let toLowerChars = false;
  let specialChars = false;
  let numberChars = false;
  let upperCharsOptions = "qwertyuiopasdfghjklzxcvbnm";
  let lowerCharsOptions = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let numberCharsOptions = "1234567890";
  let specialCharsOptions = "!@#$%^&*";

  document.querySelector("#password").value = ""

  charAmount = prompt(
    "Lenght of desired password (8 < password > 128)"

  )

  while (charAmount < 8 || charAmount > 128 || !charAmount.match(/^[0-9]+$/)){
    console.log(charAmount);
    alert("Pick a number between 8 and 128");
    charAmount = prompt("Length of desired password (8 < password > 128"
    )
  }
  let selectedoptions = []
  
  toLowerChars = confirm(
    "Would you like to use lower case letters in your password?"
  )
  if(toLowerChars){
selectedoptions = selectedoptions.concat(Array.from(lowerCharsOptions))
  }
  toUpperChars = confirm(
    "Would you like to use UPPER CASE letters in your password?"
  )
  if(toUpperChars){
    selectedoptions = selectedoptions.concat(Array.from(upperCharsOptions))
      }
  specialChars = confirm(
    "Would you like to use special characters in your password?"
  )
  if(specialChars){
    selectedoptions = selectedoptions.concat(Array.from(specialCharsOptions))
      }
  numberChars = confirm (
    "Would you like to use numbers in your password?"
  )
  if(numberChars){
    selectedoptions = selectedoptions.concat(Array.from(numberCharsOptions))
      }
  console.log(selectedoptions)
  let newPassword = ""

  for (let i = 0; i < charAmount; i++){
    let index = Math.floor(Math.random() * selectedoptions.length)
    let randomChar = selectedoptions[index]
    newPassword = newPassword + randomChar;
  }
  console.log (newPassword)
  return newPassword;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
