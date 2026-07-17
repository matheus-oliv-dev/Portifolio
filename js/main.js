import { initScrollAnimations } from './animations.js';
import { initSmoothScroll } from './utils.js';
import { initI18n } from './i18n.js';

document.addEventListener("DOMContentLoaded", () => {
    initI18n();
    initScrollAnimations();
    initSmoothScroll();
});
