# Arquitetura do Portfólio

Este documento descreve como o projeto de Portfólio está organizado tecnicamente. Leia isso antes de modificar estilos ou a lógica de JavaScript.

## 1. CSS Vanilla (Design Premium & Glassmorphism)

O projeto usa CSS puro, dividindo as responsabilidades de forma modular:

- **Global/Variables**: Todas as cores, fontes, gradientes e variáveis de estado (como light/dark mode) devem ser declaradas como variáveis CSS na raiz (`:root`).
- **Glassmorphism**: Componentes usam efeitos translúcidos (`backdrop-filter: blur`, `background: rgba(...)`) com bordas suaves para dar aspecto premium.
- **Micro-animações**: Utilizadas extensamente em hovers, botões e transições. Evite alterar o tempo padrão (geralmente em torno de 0.2s a 0.3s) para manter a consistência de navegação.

Se você precisar criar um componente novo, crie uma classe modular que aproveite essas variáveis globais.

## 2. JavaScript Modular (ES Modules)

O JavaScript não usa bundlers. Todo arquivo deve usar a extensão `.js` e deve ser importado via ES Modules com `type="module"` no `index.html`.

### Internacionalização (i18n)

- Existe um motor de internacionalização nativo customizado.
- Os textos não estão _hardcoded_ no HTML. Eles são lidos dinamicamente de arquivos ou dicionários JS.
- Para trocar o idioma (ex: PT -> EN), o sistema faz isso sem recarregar a página (manipulação direta do DOM).
- A escolha do usuário é salva no `localStorage` para que a preferência seja mantida nos próximos acessos.

Se adicionar um novo texto na interface, certifique-se de adicioná-lo no dicionário de i18n para não quebrar a troca de idiomas.

### Scroll e Animações (IntersectionObserver)

As seções e elementos da página possuem animações de "fade-in" ou deslize ao entrarem na tela.
Isso é feito usando a API `IntersectionObserver`. Se você criar uma nova seção principal no HTML, certifique-se de adicionar as classes responsáveis por iniciar essa observação, caso ela precise ser animada no scroll.
