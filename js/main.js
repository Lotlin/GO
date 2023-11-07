import {
  faqControl, openHeaderModal, closeHeaderModal, showHeaderBurger,
  closeHeaderBurger, modalValidate,
} from './modules/control.js';
import {debounce} from './modules/patterns.js';
import {swiper} from './modules/swiper.js';

faqControl();
debounce(openHeaderModal());
debounce(closeHeaderModal());
debounce(showHeaderBurger());
debounce(closeHeaderBurger());
modalValidate();
swiper;
