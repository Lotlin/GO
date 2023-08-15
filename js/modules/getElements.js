const header = document.querySelector('.header');
const faqList = document.querySelector('.faq__list');

export const headerOpenModalButton =
  header.querySelector('.header__nav-button');
export const headerModalCallBack =
  header.querySelector('.header__modal-wrapper');
export const headerCloseModalButton =
  header.querySelector('.header__modal-close-button');

export const faqItems = faqList.querySelectorAll('.faq__item');
export const faqButtons = faqList.querySelectorAll('.faq__button');
export const faqAnswersWrappers =
  faqList.querySelectorAll('.faq__answer-wrapper');
