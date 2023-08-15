import {
  faqAnswersWrappers, faqButtons, faqItems, headerOpenModalButton,
  headerModalCallBack, headerCloseModalButton,
} from './getElements.js';
import {getMaxHeight} from './service.js';

export const faqControl = () => {
  const highestAnswerWrapper = getMaxHeight(faqAnswersWrappers);

  faqButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < faqItems.length; i++) {
        if (index === i) {
          faqItems[i].classList.toggle('faq__item--active');
        } else {
          faqItems[i].classList.remove('faq__item--active');
        }
        faqAnswersWrappers[i].style.height =
            faqItems[i].classList.contains('faq__item--active') ?
            `${highestAnswerWrapper}px` : '';
      }
    });
  });
};

export const openHeaderModal = () => {
  headerOpenModalButton.addEventListener('click', () => {
    headerModalCallBack.classList.add('header__modal-wrapper--visible');
  });
};

export const closeHeaderModal = () => {
  headerCloseModalButton.addEventListener('click', () => {
    headerModalCallBack.classList.remove('header__modal-wrapper--visible');
  });

  headerModalCallBack.addEventListener('click', e => {
    const target = e.target;
    if (target === headerModalCallBack) {
      headerModalCallBack.classList.remove('header__modal-wrapper--visible');
    }
  });
};
