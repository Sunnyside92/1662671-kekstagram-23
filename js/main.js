/**Возвращает целое случайное число из диапозона
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min || (min < 0 && max < 0)) {
    throw new Error('Диапозон включает только положительные чистла. Число "от" не может быть больше числа "до"');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandom(1, 55);

/**Возвращает true, если длина строки меньше максимальной.
 * @param {string} string проверяемая строка.
 * @param {number} maxLength максимальная длина.
*/
function checkString(string, maxLength) {
  return string.length <= maxLength;
}

checkString('Привет', 140);
