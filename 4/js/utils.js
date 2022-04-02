// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник https://learn.javascript.ru/task/random-int-min-max

const MIN_VALUE = 1;
const MAX_VALUE = 14;
const STRING_COMMENT = 'Определенное количество символов';
const LENGTH_LIMIT = 100;
const MESSENGER = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',   //Создаем массив для хранения текста для комментариев. Можно вынести в константы
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'];
const AMOUNTCOMMENT = 24;

const getRandom = function (min, max) {
  if (min < max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  } else {
    throw new Error(`Значение ${min} должно быть больше ${max}`);
  }
};

getRandom(MIN_VALUE, MAX_VALUE);


// Функция для проверки максимальной длины строки.

const checkStringLength = function (current, max) {
  return current.length <= max;
};

checkStringLength(STRING_COMMENT, LENGTH_LIMIT);

export {getRandom, checkStringLength, MESSENGER, AMOUNTCOMMENT};
