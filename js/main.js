
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник https://learn.javascript.ru/task/random-int-min-max

const MIN_VALUE = 1;
const MAX_VALUE = 14;
const STRING_COMMENT = 'Определенное количество символов';
const LENGTH_LIMIT = 100;
const MASSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',   //Создаем массив для хранения текста для комментариев. Можно вынести в константы
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'];

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

const checkingMaxString = function (current, max) {
  return current.length <= max;
};

checkingMaxString(STRING_COMMENT, LENGTH_LIMIT);


class PhotoDescription
{
  //конструктор. Создаем структуру объекта
  constructor(id, url, description, likes, comments)
  {
    //инициализация переменный класса
    this.id = id;
    this.url = url;
    this.description = description;
    this.likes = likes;
    this.comments = comments;
  }
}

class PhotoComment
{
  //конструктор
  constructor(id, avatar, message, name)
  {

    //инициализация переменный класса
    this.id = id;
    this.avatar = avatar;
    this.message = message;
    this.name = name;
  }
}


const generetePhotoComment = function(count)
{

  //Создаем массив для хранения комментариев
  const comments = new Array();
  //Цикл для генерации коментариев
  for(let i = 1; i <= count; i++)
  {
    //Достаем случайный элемент из массива
    const message = MASSAGES[getRandom(0, 6)];  //Создаем аватар
    const avatar = `img/avatar-${getRandom(1, 6)}.sv`;
    //Создаем объект комментария
    const photoComment = new PhotoComment(i, avatar, message, 'Марина');
    //добавляем в массив комментарии
    comments.push(photoComment);
  }
  return comments;
};

const generatePhotoDescription = function()
{

  const photos = new Array();
  // Пишем цикл что бы создать 25 элементов массива
  for (let i = 1; i <= 24; i++)
  {
    // Создаем url
    const url = `photos/${i}.jpg`;
    //Создаем описание
    const description = 'Good';
    //Создаем количество лайков
    const likes = getRandom(15, 200);
    //Вызываем функцию генерации комментариев, передаем i - количество комментариев
    const comments = generetePhotoComment(i);
    //Создаем объект
    const photoDescription = new PhotoDescription(i, url, description, likes, comments);
    //Добавляем в массив объект фотографии
    photos.push(photoDescription);
  }
  return photos;
};

generatePhotoDescription();

