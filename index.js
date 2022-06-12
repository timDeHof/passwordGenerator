let asciiString =
  "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";
let symbols = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
let numbers =["0","1","2","3","4","5","6","7","8","9"]
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]  
let asciiArray = []
let passwords = [];
let passwordLengthInput = document.getElementById("passwordlength");
let min = 0;
let max = 93;
let password1EL = document.getElementById("password1");
let password2EL = document.getElementById("password2");
let password3EL = document.getElementById("password3");
let password4EL = document.getElementById("password4");

function createPassword() {
  let passwordLength = passwordLengthInput.valueAsNumber;  
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let asciiIndex = Math.floor(Math.random() * (max - min) + min);
    password += asciiString[asciiIndex];
  }
  return password;
}

function generatePasswords() { 
  let numberOfPasswords = 4;
  for (let i = 0; i < numberOfPasswords; i++) {
    let passwordElement = createPassword();
    passwords.push(passwordElement);
  }
  password1EL.textContent = passwords[0];
  password2EL.textContent = passwords[1];
  password3EL.textContent = passwords[2];
  password4EL.textContent = passwords[3];
}
