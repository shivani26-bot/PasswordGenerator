const passwordBox = document.getElementById("password");
const passwordLength = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = "~!@#$%^&*()_+-=:[]{}<?>/|";
const allChars = upperCase + lowerCase + number + specialChar;
function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];
  while (passwordLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  // selects the text within the HTML input element
  passwordBox.select();
  //   executes the browser's copy command, which copies the currently selected text to the clipboard.
  document.execCommand("copy");
}
createPassword();
