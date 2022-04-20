import '../nouislider/nouislider.js';
import {rendersFullSizeImage, commentsWrapClear, bigPicture} from './bigpictures.js';
import {picturesWrap} from './pictures.js';
import {isEscapeKey} from './utils.js';

const appears = (userPhotos) => {
  const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');

  const onBigPictureEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  };

  function openBigPicture(evtEl, photos) {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    rendersFullSizeImage(evtEl, photos);
    document.addEventListener('keydown', onBigPictureEscKeydown);
  }

  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    commentsWrapClear();
    document.removeEventListener('keydown', onBigPictureEscKeydown);
  }

  picturesWrap.addEventListener('click', (evt) => {
    if (evt.target.matches('.picture__img')) {
      openBigPicture(evt, userPhotos);
    }
  });

  bigPictureCloseElement.addEventListener('click', () => {
    closeBigPicture();
  });
};

export {appears};
