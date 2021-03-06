import {rendersThumbnails, rendersRandomThumbnails, rendersThumbnailsDiscussed} from './pictures.js';
import {RERENDER_DELAY} from './constants.js';
import {debounce} from './utils.js';

const filtersWrap = document.querySelector('.img-filters');
const filtersForm = filtersWrap.querySelector('.img-filters__form');
const filtersFormBtns = filtersWrap.querySelectorAll('.img-filters__button');

const setStartValueFilterBtn = () => {
  filtersWrap.classList.remove('img-filters--inactive');

  filtersFormBtns.forEach((filtersFormBtn) => {
    filtersFormBtn.classList.remove('img-filters__button--active');
    if (filtersFormBtn === document.getElementById('filter-default')) {
      filtersFormBtn.classList.add('img-filters__button--active');
    }
  });
};

const filterPhotos = (evt, photos) => {
  if (evt.target === document.getElementById('filter-default')) {
    filtersFormBtns.forEach((filtersFormBtn) => {
      filtersFormBtn.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');
    rendersThumbnails(photos);
  }
  if (evt.target === document.getElementById('filter-random')) {
    filtersFormBtns.forEach((filtersFormBtn) => {
      filtersFormBtn.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');
    rendersRandomThumbnails(photos);
  }
  if (evt.target === document.getElementById('filter-discussed')) {
    filtersFormBtns.forEach((filtersFormBtn) => {
      filtersFormBtn.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');
    rendersThumbnailsDiscussed(photos);
  }
};

const debounced = debounce(filterPhotos, RERENDER_DELAY);

export {setStartValueFilterBtn, debounced, filtersForm};
