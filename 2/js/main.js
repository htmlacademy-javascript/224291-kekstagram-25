
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник https://learn.javascript.ru/task/random-int-min-max

const MIN_VALUE = 1;
const MAX_VALUE = 14;

const GET_RANDOM = document function (min, max) {
  if (min < max) {
    const RAND = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(RAND);
  } else {
    throw new Error('Значение ' + min + ' должно быть больше ' + max);
  }
};

GET_RANDOM(MIN_VALUE, MAX_VALUE);


// Функция для проверки максимальной длины строки.


const STRING_COMMENT = 'Определенное количество символов';
const LENGTH_LIMIT = 100;

const RETURN_STRING_LENGTH = function (current, max) {
  return current.length <= max;
};

RETURN_STRING_LENGTH(STRING_COMMENT, LENGTH_LIMIT);

