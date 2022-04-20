import {isEscapeKey, showAndCloseStatusMessage} from './utils.js';
import {validatesHashtag} from './validate.js';
import {SCALE_NUMBER_MIN, SCALE_NUMBER_MAX} from './constants.js';
import {onEffectChange} from '../nouislider/nouislider-effect-level.js';
import {sendData} from './api.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = imgUploadOverlay.querySelector('.img-upload__preview img');
const uploadCancel = imgUploadOverlay.querySelector('#upload-cancel');

const uploadFileInput = document.querySelector('#upload-file');
const scaleControlInput = document.querySelector('.scale__control--value');
const effectLevelInput = document.querySelector('.effect-level__value');

const hashtagsText = imgUploadOverlay.querySelector('.text__hashtags');
const commentText = imgUploadOverlay.querySelector('.text__description');

const scaleBiggerBtn = document.querySelector('.scale__control--bigger');
const scaleSmallerBtn = document.querySelector('.scale__control--smaller');


const setScale = (scale) => {
  scaleControlInput.value = `${scale}%`;
  imgUploadPreview.style.transform = `scale(${scale/100})`;
};

const resetScale = () => {
  setScale(SCALE_NUMBER_MAX);
};

scaleBiggerBtn.addEventListener('click', () => {
  const scale = parseInt(scaleControlInput.value, 10) < SCALE_NUMBER_MAX ? parseInt(scaleControlInput.value, 10)+ SCALE_NUMBER_MIN : SCALE_NUMBER_MAX;
  setScale(scale);
});

scaleSmallerBtn.addEventListener('click', () => {
  const scale = parseInt(scaleControlInput.value, 10) > SCALE_NUMBER_MIN ? parseInt(scaleControlInput.value, 10)- SCALE_NUMBER_MIN : SCALE_NUMBER_MIN;
  setScale(scale);
});

const onImgUploadOverlayEscKeydown = (evt) => {
  if (hashtagsText !== document.activeElement && commentText !== document.activeElement) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeImgUploadOverlay();
    }
  }
};

 function closeImgUploadOverlay() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgUploadOverlayEscKeydown);
  scaleSmallerBtn.removeEventListener('click', resetScale);
  scaleBiggerBtn.removeEventListener('click', resetScale);
}

const openImgUploadOverlay = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  setScale();
  validatesHashtag();
  onEffectChange();
  document.addEventListener('keydown', onImgUploadOverlayEscKeydown);
};

uploadFileInput.addEventListener('change', () => {
  openImgUploadOverlay();
});

uploadCancel.addEventListener('click', () => {
  closeImgUploadOverlay();
});

const setImgUploadFormSubmit = (onResponse) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      'https://25.javascript.pages.academy/kekstagram',
      () => {
        showAndCloseStatusMessage('success');
        onResponse();
      },
      () => {
        showAndCloseStatusMessage('error');
        onResponse();
      },
      new FormData(evt.target),
    );
  });
};

export {hashtagsText, commentText, uploadFileInput, imgUploadPreview, effectLevelInput, closeImgUploadOverlay, setImgUploadFormSubmit};
