export const swiper = new Swiper('.swiper', {
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.hall__button-right',
    prevEl: '.hall__button-left',
  },
});
