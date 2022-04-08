import {photos} from './data.js';
import {isEscEvent} from './utils.js';
import {pictures} from './pictures.js';

const pictureList = pictures.querySelectorAll('.picture');

const bigPicture = document.querySelector('.big-picture');
const cancel = bigPicture.querySelector('.big-picture__cancel');
const socialComment = bigPicture.querySelector('.social__comments');
const commentTemplate = socialComment.querySelector('.social__comment');
const commentsFragment = document.createDocumentFragment();

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');

const fullSizePictureRender = (evt) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  const pictureSrc = evt.target.src;
  bigPicture.querySelector('.big-picture__img img').src = pictureSrc;

  const userPhotoCurrent = photos.find((userPhoto) => {
    if (pictureSrc.indexOf(userPhoto.url) !== -1) {
      return true;
    }
  });
  const userPhotoCurrentComments = userPhotoCurrent.comments;

  bigPicture.querySelector('.likes-count').textContent = userPhotoCurrent.likes;
  bigPicture.querySelector('.comments-count').textContent = userPhotoCurrent.comments.length;
  bigPicture.querySelector('.social__caption').textContent = userPhotoCurrent.description;

  userPhotoCurrentComments.forEach((item) => {
    socialComment.innerHTML = '';
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = item.avatar;
    newComment.querySelector('.social__picture').alt = item.userName;
    newComment.querySelector('.social__text').textContent = item.message;
    commentsFragment.appendChild(newComment);
  });
  socialComment.appendChild(commentsFragment);

};

const showBigPicture = () => {
  pictureList.forEach((picture) => {
    picture.addEventListener('click', fullSizePictureRender);
  });
};

cancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});

showBigPicture();
