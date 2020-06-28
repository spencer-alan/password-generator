/* Abandoned this idea but I wanted to keep it in the file 
just in case I can complete this homwork once I learn more */

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

  if (charCount >= 8 && charCount <= 128){  
    //Maybe I can do a recursive loop? If validPwd is not satified run agian?
      let validPwd = [false, false, false, false];
      if (lower === true){
        options.push(0);
      } else {
        validPwd[0] = true
      }

      if (upper === true){
        options.push(1)
      } else {
        validPwd[1] = true
      }

      if (numbers === true){
        options.push(2)
      } else {
        validPwd[2] = true
      }

      if (special === true){
        options.push(3)
      } else {
        validPwd[3] = true
      }
      console.log(validPwd)

    //function passwordLoop (){
    for (let i = 0; i < charCount; i++){
      let charType = options[Math.floor(Math.random() * options.length)];
      let charRandom = characters[charType];
      //password needs to somehow get every characters array at least once
      password += charRandom[Math.floor(Math.random() * charRandom.length)];
      console.log("pwdLoop: ", password);
      if (charType === options[0])
        validPwd[0] = true
      } 
    //}  
      // if (validPwd !== [true, true, true, true]){
      // passwordLoop();} 
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
