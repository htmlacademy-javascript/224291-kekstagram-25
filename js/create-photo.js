import {NAMES, getRandom, MESSENGER, AMOUNTCOMMENT, getRandomArrayElement, MAX_COMMENTS_NUMBER} from './utils.js';


const commentIds = [];

const createCommentId = (index) => {
  commentIds.push(index);
  return commentIds.length;
};

const createComments = (index) => ({
  id: createCommentId(index),
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  message: getRandomArrayElement(MESSENGER),
  userName: getRandomArrayElement(NAMES),
});

const userComments = () => Array.from({length: getRandom(0, MAX_COMMENTS_NUMBER)}, (item, key) => createComments(key + 1));

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: 'Good',
  likes: getRandom(15, 200),
  comments: userComments(),
});

const userPhotos = Array.from({length: AMOUNTCOMMENT}, (item, key) => createPhoto(key + 1));

export {userPhotos};


