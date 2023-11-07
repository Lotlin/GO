export const body = document.querySelector('body');
const header = body.querySelector('.header');
const faqList = body.querySelector('.faq__list');

export const headerOpenModalButton =
  header.querySelector('.header__nav-button');
export const headerModalCallBack =
  header.querySelector('.header__modal-wrapper');
export const headerCloseModalButton =
  header.querySelector('.header__modal-close-button');
export const burgerImage =
  header.querySelector('.header__nav-img');
export const burgerList =
  header.querySelector('.header__list');

export const faqItems = faqList.querySelectorAll('.faq__item');
export const faqAnswersWrappers =
  faqList.querySelectorAll('.faq__answer-wrapper');

export const modal = document.querySelector('.callback-form');
export const inputTelModal = modal.querySelector('.callback-form__phone');
export const inputNameModal = modal.querySelector('.callback-form__name');
