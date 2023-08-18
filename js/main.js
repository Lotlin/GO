import {
  faqControl, openHeaderModal, closeHeaderModal, showHeaderBurger,
  closeHeaderBurger,
} from './modules/control.js';

import {debounce} from './modules/patterns.js';

faqControl();
debounce(openHeaderModal());
debounce(closeHeaderModal());
debounce(showHeaderBurger());
debounce(closeHeaderBurger());
