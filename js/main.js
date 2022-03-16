// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник https://learn.javascript.ru/task/random-int-min-max

const minValue = 1;
const maxValue = 14;

const randomInteger = function (min, max) {
  if (min < max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  } else {
    alert('Значение ' + min + ' должно быть больше ' + max)
  }
};

randomInteger(minValue, maxValue);


// Функция для проверки максимальной длины строки.


const stringComment = 'Определенное количество символов';
const lengthLimit = 100;

const returnLengthString = function (current, max) {
  return current.length <= max;
};

returnLengthString(stringComment, lengthLimit);
