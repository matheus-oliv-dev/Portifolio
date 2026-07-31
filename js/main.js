import { initScrollAnimations } from './animations.js';
import { initSmoothScroll } from './utils.js';
import { initI18n } from './i18n.js';
import { initNeuralBg } from './neural-bg.js';

document.addEventListener("DOMContentLoaded", () => {
    initI18n();
    initNeuralBg();
    initScrollAnimations();
    initSmoothScroll();
});
