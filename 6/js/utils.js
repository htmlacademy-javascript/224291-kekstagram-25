// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник https://learn.javascript.ru/task/random-int-min-max

const MIN_VALUE = 1;
const MAX_VALUE = 14;
const MAX_COMMENTS_NUMBER = 4;
const MESSENGER = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',   //Создаем массив для хранения текста для комментариев. Можно вынести в константы
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'];

const NAMES = [
  'Артем',
  'Марина',
  'Вася',
  'Иван',
  'Андрей',
  'Катя',
  'Лена',
  'Станислав',
  'Любовь',
  'Алиса',];

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

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const checkMaxStringLength = (checkedString, maxLength) => checkedString.length <= maxLength;
checkMaxStringLength('Проверка работы', 10);


export {getRandom, getRandomArrayElement, MESSENGER, AMOUNTCOMMENT, NAMES, MAX_COMMENTS_NUMBER};
