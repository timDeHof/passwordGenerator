let characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let passwordLengthInput = document.getElementById('passwordLength');
const passwordContainer = document.getElementById('passwordContainer');
let password1EL = document.getElementById('password1');
let password2EL = document.getElementById('password2');
let password3EL = document.getElementById('password3');
let password4EL = document.getElementById('password4');
let generatePasswordBtn = document.getElementById('btn');

let lengthValue = document.getElementById('length');
lengthValue.textContent = passwordLengthInput.value;
// updates the length value with the slider
passwordLengthInput.oninput = function () {
  lengthValue.textContent = this.value;
};
function checkCheckboxes() {
  let asciiArray = [];
  let numbers = document.getElementById('number');
  let symbols = document.getElementById('symbol');
  if (numbers.checked == true && symbols.checked == true) {
    asciiArray = characters;
  } else if (numbers.checked == true && symbols.checked != true) {
    asciiArray = characters.slice(0, 62);
  } else if (numbers.checked != true && symbols.checked != true) {
    asciiArray = characters.slice(0, 52);
  } else if (numbers.checked != true && symbols.checked == true) {
    lettersArr = characters.slice(0, 52);
    symbolsArr = characters.slice(62, 91);
    asciiArray = [...lettersArr, ...symbolsArr];
  }
  return asciiArray;
}

function createPassword() {
  let newArr = checkCheckboxes();
  let min = 0;
  let max = newArr.length - 1;
  let passwordLength = passwordLengthInput.valueAsNumber;
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    let asciiIndex = Math.floor(Math.random() * (max - min) + min);
    password += newArr[asciiIndex];
  }
  return password;
}

function generatePasswords() {
  let passwords = [];
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

password1EL.addEventListener('click',  copyText);
password2EL.addEventListener('click', copyText);
password3EL.addEventListener('click',  copyText);
password4EL.addEventListener('click',  copyText);

async function copyText() {
  let text = this.innerHTML;
  await navigator.clipboard.writeText(text)
            if(text) {
              alert(`Text (${text}) copied to clipboard`);
            } else 
           {
              alert('Error in copying text: ');
            };
}