import {
  getRandom,
  MESSENGER,
  AMOUNTCOMMENT
} from './utils.js';

class PhotoDescription {

  constructor(id, url, description, likes, comments) {

    this.id = id;
    this.url = url;
    this.description = description;
    this.likes = likes;
    this.comments = comments;
  }
}

class PhotoComment {

  constructor(id, avatar, message, name) {

    this.id = id;
    this.avatar = avatar;
    this.message = message;
    this.name = name;
  }
}

const generatePhotoComment = function (count) {

  //Создаем массив для хранения комментариев
  const comments = new Array();

  for (let i = 1; i <= count; i++) {

    const message = MESSENGER[getRandom(0, 6)]; //Создаем аватар
    const avatar = `img/avatar-${getRandom(1, 6)}.sv`;
    const photoComment = new PhotoComment(i, avatar, message, 'Марина');

    comments.push(photoComment);
  }
  return comments;
};

const generatePhotoDescription = function () {
  const photos = new Array();
  for (let i = 1; i <= AMOUNTCOMMENT; i++) {
    const url = `photos/${i}.jpg`; // Создаем url
    const description = 'Good';
    const likes = getRandom(15, 200);

    const comments = generatePhotoComment(i);

    //Создаем объект
    const photoDescription = new PhotoDescription(i, url, description, likes, comments);

    photos.push(photoDescription);
  }
  return photos;
};

generatePhotoDescription();

export {
  generatePhotoDescription
};
