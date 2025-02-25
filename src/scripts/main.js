'use strict';

// import { Swiper, SwiperSlide } from 'swiper/swiper';

// import 'swiper/swiper.scss';

const swiper = new Swiper('.swiper', {
  // ... інші налаштування Swiper ...
  navigation: {
    nextEl: '.header_right.header_arrow-button',
    prevEl: '.header_left.header_arrow-button',
  },
});
