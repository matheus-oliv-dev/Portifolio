# Diário de Bordo (Progresso)

Use este arquivo para rastrear o progresso do projeto entre as sessões.

## Última Sessão

- **Data:** 2026-08-27
- **Feito:**
  - **Hardening de Segurança no Frontend ([index.html](file:///c:/Users/mathe/OneDrive/%C3%81rea%20de%20Trabalho/Portifolio/index.html)):**
    - Configuração de `Content-Security-Policy` (CSP) estrito via `<meta>`.
    - Configuração de `Referrer-Policy` (`strict-origin-when-cross-origin`) e `Permissions-Policy` (`camera=(), microphone=(), geolocation=()`).
    - Subresource Integrity (SRI) com hash SHA-512 e `crossorigin="anonymous"` na CDN do FontAwesome.
    - Mitigação de *Reverse Tabnabbing* com `rel="noopener noreferrer"` em todos os links externos com `target="_blank"`.
  - **Automação DevSecOps CI/CD ([.github/workflows/security.yml](file:///c:/Users/mathe/OneDrive/%C3%81rea%20de%20Trabalho/Portifolio/.github/workflows/security.yml)):**
    - Secret Scanning com **Gitleaks** para prevenção de vazamento de credenciais e tokens.
    - Análise estática de vulnerabilidades (SAST) com **Semgrep** (OWASP Top 10 + JS Security).
    - Verificação contínua de integridade estrutural executando `init.sh`.
  - Ajuste na grade de projetos do portfólio (mantendo os projetos de desenvolvimento originais: TechSales, Engine de Xadrez, Teacher Sarah).
  - Execução e aprovação nos testes de sanidade `bash ./init.sh`.
- **Bloqueios/Avisos:** Nenhum bloqueio.
- **Próximos Passos Sugeridos:**
  - Enviar alterações com `git push`.
