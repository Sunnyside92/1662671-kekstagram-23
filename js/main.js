// Генерация случайного числа взято с https://myrusakov.ru/js-random-numbers.html
//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandom = function (firstNumber, SecondNumber) {
  return Math.floor(Math.random() * (SecondNumber - firstNumber + 1)) + firstNumber;
};

getRandom(1,55);

//Функция для проверки максимальной длины строки
const checkString = function(string,maxLength) {
  return string.length <= maxLength;
};

checkString('Привет', 140);
