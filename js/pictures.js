import {appears} from './popup.js';
import {RANDOM_NON_REPEAT_PHOTOS_QUANTITY} from './constants.js';

const picturesWrap = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const usersPhotoListFragment = document.createDocumentFragment();

const resetArray = () => {
  Array.from(picturesWrap.children).forEach((item) => {
    if(item.classList.contains('picture')) {
      item.remove();
    }
  });
};

const rendersThumbnails = (userPhotos) => {
  userPhotos.forEach(({url, likes, comments}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    usersPhotoListFragment.appendChild(photoElement);
  });
  resetArray();
  picturesWrap.appendChild(usersPhotoListFragment);
  appears(userPhotos);
};

const rendersRandomThumbnails = (userPhotos) => {
  userPhotos
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, RANDOM_NON_REPEAT_PHOTOS_QUANTITY)
    .forEach(({url, likes, comments}) => {
      const photoElement = pictureTemplate.cloneNode(true);
      photoElement.querySelector('.picture__img').src = url;
      photoElement.querySelector('.picture__likes').textContent = likes;
      photoElement.querySelector('.picture__comments').textContent = comments.length;
      usersPhotoListFragment.appendChild(photoElement);
    });
  resetArray();
  picturesWrap.appendChild(usersPhotoListFragment);
  appears(userPhotos);
};

const comparePhotos = (photoA, photoB) => {
  const commentsNumberA = photoA.comments.length;
  const commentsNumberB = photoB.comments.length;
  return commentsNumberB - commentsNumberA;
};

const rendersThumbnailsDiscussed = (userPhotos) => {
  userPhotos
    .slice()
    .sort(comparePhotos)
    .forEach(({url, likes, comments}) => {
      const photoElement = pictureTemplate.cloneNode(true);
      photoElement.querySelector('.picture__img').src = url;
      photoElement.querySelector('.picture__likes').textContent = likes;
      photoElement.querySelector('.picture__comments').textContent = comments.length;
      usersPhotoListFragment.appendChild(photoElement);
    });
  resetArray();
  picturesWrap.appendChild(usersPhotoListFragment);
  appears(userPhotos);
};

export {rendersThumbnails, rendersRandomThumbnails, rendersThumbnailsDiscussed, picturesWrap};
