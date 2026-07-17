import { translations } from './translations.js';

export function initI18n() {
    const langToggleBtn = document.getElementById('lang-toggle');
    if (!langToggleBtn) return;

    // Recupera o idioma salvo ou define pt como padrão
    let currentLang = localStorage.getItem('portfolio_lang') || 'pt';
    
    // Função para aplicar a tradução
    const applyTranslations = (lang) => {
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
        
        // Atualiza os textos
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Atualiza visualmente o botão (Mostra o idioma oposto para clicar)
        langToggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
        langToggleBtn.setAttribute('aria-label', lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese');
    };

    // Aplica na inicialização
    applyTranslations(currentLang);

    // Adiciona evento de clique para alternar
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        localStorage.setItem('portfolio_lang', currentLang);
        applyTranslations(currentLang);
    });
}
