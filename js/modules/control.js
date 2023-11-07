import {
  body, faqAnswersWrappers, faqItems, headerOpenModalButton,
  headerModalCallBack, headerCloseModalButton, burgerImage, burgerList,
  modal, inputTelModal, inputNameModal,
} from './getElements.js';
import {getMaxHeight} from './service.js';

export const faqControl = () => {
  const highestAnswerWrapper = getMaxHeight(faqAnswersWrappers);

  faqItems.forEach((btn, index) => {
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

export const showHeaderBurger = () => {
  burgerImage.addEventListener('click', () => {
    burgerList.classList.add('header__list--active');
    headerOpenModalButton.classList.add('header__nav-button--active');
  });
};

export const closeHeaderBurger = () => {
  body.addEventListener('click', e => {
    const target = e.target;
    if (target !== burgerList && target !== burgerImage) {
      burgerList.classList.remove('header__list--active');
      headerOpenModalButton.classList.remove('header__nav-button--active');
    }
  });
};

export const modalValidate = () => {
  const telMask = new Inputmask('+7 (999)-999-99-99');
  telMask.mask(inputTelModal);

  const justValidate = new JustValidate(modal);
  justValidate
      .addField(inputTelModal, [
        {
          rule: 'required',
          errorMessage: 'Укажите ваш email',
        },
      ])
      .addField(inputNameModal, [
        {
          rule: 'required',
          errorMessage: 'Укажите ваше имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Имя должно быть не короче 3-х символов',
        },
      ])
      .onSuccess(event => {
        const target = event.target;
        console.log(target);
      });
};
