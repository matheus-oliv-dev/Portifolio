# AGENTS.md

## Visão Geral do Projeto

Portfólio Pessoal Estático. Não possui backend, não possui npm, Node.js, ou dependências externas. Tudo é construído com HTML5, CSS3 (Vanilla) e JavaScript (ES Modules). O site possui um sistema de internacionalização (i18n) e temas (CSS variables), focado em performance.

## Antes de escrever código

1. Confirme o diretório base: deve estar em `/Portifolio`.
2. Leia `progress.md` e `feature_list.json` para entender o contexto atual, o que foi feito recentemente e a feature ativa.
3. Revise commits recentes para ver o contexto do que o humano estava fazendo.
4. Execute `bash ./init.sh` (ou execute as verificações manuais de sanidade se estiver em PowerShell puro). Se o script falhar, corrija a base antes de implementar algo novo.

## Restrições obrigatórias

- **Sem Dependências**: Não crie arquivos `package.json`, não execute `npm install`. Nenhuma dependência externa de build pode ser adicionada.
- **Javascript**: Use apenas ES Modules (`import`/`export`).
- **CSS**: Mantenha o sistema de variáveis e Glassmorphism. Não adicione frameworks CSS (Tailwind, Bootstrap, etc).

## Documentos Temáticos

- Arquitetura de CSS e JS (`docs/architecture.md`) — Leitura obrigatória se você for criar novos componentes visuais ou modificar a lógica de idiomas/temas.

## Definição de Concluído (Definition of Done)

Uma feature nova (visual ou estrutural) só está concluída quando:

- O comportamento solicitado foi implementado.
- Os arquivos principais continuam intactos (não foram removidos acidentalmente).
- `bash ./init.sh` passa (arquivos esperados existem).
- `feature_list.json` foi atualizado com o status da tarefa concluída e a evidência de que a interface (ou comportamento) funciona.
- `progress.md` foi atualizado com o que foi feito na sessão.

## Fim de sessão

1. Atualizar `feature_list.json` (marcar task atual como concluída).
2. Atualizar `progress.md` (resumo da sessão, bloqueios, próximo passo sugerido).
3. Informar ao usuário que a sessão foi concluída.
