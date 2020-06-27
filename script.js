// Assignment Code
let generateBtn = document.querySelector("#generate");
let charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "<", ">", "/"];
let characters = [charLower, charUpper, number, special];
 // let validLength = (charCount < 8 || charCount > 128);


function generatePassword(){
  let charCount = parseInt(prompt("Length must be 8 to 128 characters long. How long do you want the password length to be?"));
  let lower = confirm("Do you want to add lowercase letters?");
  let upper  = confirm("Do you want to add uppercase letters?");
  let numbers = confirm("Do you want to add numbers?");
  let special = confirm("Do you want to add special characters?");
  let options = [];
  let password = "";

  if (lower === true){
    options.push(0)
  }

  if (upper === true){
    options.push(1)
  }

  if (numbers === true){
    options.push(2)
  }

  if (special === true){
    options.push(3)
  }
  
  if (charCount >= 8 && charCount <= 128){
    for (let i = 0; i < charCount; i++){
      let charType = options[Math.floor(Math.random() * options.length)];
      let charRandom = characters[charType];
      password += charRandom[Math.floor(Math.random() * charRandom.length)];
      //console.log("passwrodLoop: ", password);
    }
  }
  //console.log("password: ", password)
  return password
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
