import {generatePhotoDescription} from './data.js';


const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoDescriptions = generatePhotoDescription();
const photoDescriptionFragment = document.createDocumentFragment();

photoDescriptions.forEach((photoDescription) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photoDescription.url;
  pictureElement.querySelector('.picture__comments').textContent = photoDescription.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photoDescription.likes;
  photoDescriptionFragment.appendChild(pictureElement);
});

pictures.appendChild(photoDescriptionFragment);

export {pictures};
