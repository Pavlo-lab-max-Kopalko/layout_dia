'use strict';

const arrowLeft = document.getElementsByClassName('header__left')[0];
const arrowRight = document.getElementsByClassName('header__right')[0];
const headerBackgraund
  = document.getElementsByClassName('header__background')[0];

console.log(arrowLeft);
console.log(arrowRight);
console.log(headerBackgraund);

const photos = [
  '/images/slider-photo1.png',
  '/images/slider-photo2.png',
  '/images/slider-photo3.png',
  '/images/background-photo.png',
];

console.log(headerBackgraund.style.backgroundImage);

let index = 0;

arrowRight.addEventListener('click', () => {
  index += 1;
  headerBackgraund.style.backgroundImage = `url${photos[index]}`;
});
