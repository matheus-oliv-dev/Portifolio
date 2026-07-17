export function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: Descomentar a linha abaixo se quiser que a animação ocorra apenas uma vez
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Selecionar todos os elementos com a classe fade-in-up
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(el => observer.observe(el));
}
