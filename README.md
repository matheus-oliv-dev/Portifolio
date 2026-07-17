# Portfólio Pessoal - Matheus de Oliveira 🚀

Bem-vindo ao repositório do meu site de portfólio pessoal! 

Este projeto foi construído focado em ser **extremamente leve e performático**, utilizando tecnologias Vanilla (sem frameworks pesados), garantindo um carregamento instantâneo para os visitantes e facilidade de hospedagem.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica.
- **CSS3 (Vanilla)**: Sistema de design premium utilizando cores vibrantes, efeitos de "Glassmorphism" (vidro translúcido) e variáveis para facilitar a manutenção. O CSS é modularizado por responsabilidade (`global`, `layout`, `components`, `animations`).
- **JavaScript (ES Modules)**: Arquitetura modular contendo:
  - Animações suaves de "fade-in" no scroll baseadas em `IntersectionObserver`.
  - Motor de **Internacionalização (i18n)** customizado que permite trocar o idioma da página (PT/EN) dinamicamente sem recarregar, persistindo a escolha via `localStorage`.

## 🌟 Funcionalidades

- **Internacionalização (PT/EN)**: Suporte nativo a múltiplos idiomas com troca instantânea.
- **Design Responsivo**: Adaptável perfeitamente para Mobile e Desktop.
- **Dark Mode Premium**: Interface moderna focada em legibilidade e estética.
- **Navegação Suave (Smooth Scroll)**: Links de âncora com transição fluida.
- **Exibição de Projetos**: Grade de projetos integrados (CRUD Python, Engine Xadrez, Bot Inglês, etc.) contendo links externos de deploy e repositório.
- **Conquistas**: Seção para prêmios e certificados.

## 🚀 Como Executar Localmente

Como o projeto não possui dependências de pacotes (como Node.js ou npm), para rodá-lo:

1. Faça o clone deste repositório:
   ```bash
   git clone https://github.com/matheus-oliv-dev/Portifolio.git
   ```
2. **Recomendado:** Abra o projeto utilizando uma extensão como o **Live Server** (VS Code) ou um servidor local estático. Como o projeto agora utiliza ES Modules (`import/export` nativo do JS), abrir o `index.html` diretamente (via `file://`) pode ser bloqueado pela política de CORS dos navegadores modernos.

## 🌐 Deploy

Este projeto é otimizado para a plataforma **Vercel**. Por ser um site puramente estático, o deploy é feito de forma instantânea sem necessidade de build.

---
Desenvolvido por **Matheus de Oliveira** | Fullstack Data & Development
