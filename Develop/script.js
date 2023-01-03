// Assignment Code
//Generate Button variable
var generateBtn = document.querySelector("#generate");

//prompts
var passwordLength;
var special;
var numeric;
var uppercase;
var lowercase;

//password characer criteria
var spe = ["!","@","#","$","%","^","&","*","(",")","-","_"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Generate Password
function generatePassword () {
  //var password = "";
  var passwordChar = "";
  // 1. Prompt the user for the password criteria.
  //    a. password length 8 < 128.
  while (true) {
    passwordLength = parseInt(prompt("Choose a password with a length between 8 and 128"));
    // If user inputs value between 8 and 128 and pressed okay - proceed to next prompt
    if (passwordLength >=8 && passwordLength <=128) {
      break;
    }
    //Else, return this alert and loop back to the start so they can choose a valid number
    alert("Please select a number between 8 and 128");
  }
  //    Once a valid number is chosen, criteria is chosen: Lowercase, uppercase, numbers, special characters.
  lowercase = confirm("Select 'OK' if you would like to include lower case characters");
  uppercase = confirm("Select 'OK' if you would like to include upper case characters");
  numeric = confirm("Select 'OK' if you would like to include numbers");
  special = confirm("Select 'OK' if you would like to include special characters");

  //state all possible true options and pass them to the passwordChar variable
  if (special) {
    passwordChar = spe;
  } else if (numeric) {
    passwordChar = num;
  } else if (uppercase) {
    passwordChar = upper;
  } else if (lowercase) {
    passwordChar = lower;
  } else if (special && numeric) {
    passwordChar = spe += num;
  } else if (special && uppercase) {
    passwordChar = spe += upper;
  } else if (special && lowercase) {
    passwordChar = spe += lower;
  } else if (numeric && uppercase) {
    passwordChar = num += upper;
  } else if (numeric && lowercase) {
    passwordChar = num += lower;
  } else if (uppercase && lowercase) {
    passwordChar = upper += lower;
  } else if (special && numeric && uppercase) {
    passwordChar = spe += num += upper;
  } else if (special && numeric && lowercase) {
    passwordChar = spe += num += lower;
  } else if (special && uppercase && lowercase) {
    passwordChar = spe += upper += lower;
  } else if (lowercase && numeric && uppercase) {
    passwordChar = lower += num += upper;
  } else if (special && numeric && uppercase && lowercase) {
    passwordChar = spe += num += upper += lower;
    // 2. Validate the input.
  } else if (!special && !numeric && !uppercase && !lowercase)
    alert("You must select at least one criteria, please start again!")
// if (special) 
//   passwordArray.concat(spe)
// if (numeric) 
//   passwordArray.concat(num)
// if (uppercase) 
//   passwordArray.concat(upper)
// if (lowercase) 
//   passwordArray.concat(lower)
  // 3. Generate password based on criteria.
 // like this
let password = '';
for (let i = 0; i < passwordLength; i++) {
  password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
}

  // 4. Display generated password to the page.
  return (password)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

