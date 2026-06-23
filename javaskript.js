// Завдання 1
function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);

// Завдання 2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice('JavaScript is awesome', 10));

// Завдання 3
function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// Завдання 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }

  return `${string.slice(0, 40)}...`;
}

console.log(formatString('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));

// Завдання 5
function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}

console.log(checkForSpam('Latest SALE!'));
console.log(checkForSpam('No spam here'));

// Завдання 6
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  if (Number.isNaN(Number(input))) {
    alert('Було введено не число, попробуйте ще раз');
    continue;
  }

  numbers.push(Number(input));
}

for (const number of numbers) {
  total += number;
}

console.log(`Загальна сума чисел дорівнює ${total}`);

// Завдання 7 (додаткове)
const logins = ['Mango', 'robotGoogles', 'Poly'];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
}

console.log(addLogin(logins, 'Ajax'));
console.log(logins);
