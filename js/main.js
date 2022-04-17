import '../nouislider/nouislider.js';
import {closeImgUploadOverlay, setImgUploadFormSubmit} from './form.js';
import {showAlert} from './utils.js';
import {getData} from './api.js';
import {setStartValueFilterBtn} from './filters.js';
import {thumbnailsRender} from './pictures.js';
import {debounced, filtersForm} from './filters.js';
import './photo-upload.js';

getData(
  'https://25.javascript.pages.academy/kekstagram/data',
  (photos) => {
    thumbnailsRender(photos);
    setStartValueFilterBtn();
    filtersForm.addEventListener('click', (evt) => debounced(evt, photos));
  },
  () => showAlert('Не удалось загрузить фотографии. Попробуйте перезагрузить страницу'),
);

setImgUploadFormSubmit(closeImgUploadOverlay);
