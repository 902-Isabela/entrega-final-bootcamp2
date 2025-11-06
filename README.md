# entrega-final-bootcamp2
## 🏗️ Arquitetura e Estrutura do Projeto

Este projeto é um **Monorepo** que implementa um **Progressive Web App (PWA)** Full Stack, utilizando a seguinte arquitetura:

* **PWA (Front-End):** Desenvolvido com **Vite** e JavaScript puro, responsável pela interface do usuário e pela lógica de Service Worker (para cache e offline).
* **API (Back-End):** Implementada com **Node.js** e **Express.js**, responsável pela lógica de negócio e pelo consumo de dados (utilizando a API pública ViaCEP).
* **Containers:** Toda a aplicação é orquestrada via **Docker Compose**, garantindo ambientes isolados e idênticos para os serviços `web` e `api`.

### Estrutura do Repositório
## 🐳 Instruções para Rodar Localmente (Docker)

Para iniciar o projeto completo em sua máquina:

1.  Certifique-se de ter o **Docker Desktop** instalado e rodando.
2.  No terminal, navegue até a pasta raiz (`monorepo-pwa/`).
3.  Execute o comando para construir as imagens e iniciar os serviços:

```bash
docker-compose up --build
Após a execução, o Front-End estará acessível em: http://localhost:8080.

## 🤖 CI/CD e Artefatos

O projeto utiliza **GitHub Actions** para automação de testes e deploy do Front-End (PWA) no GitHub Pages.

### 🔗 Link da Última Execução do CI

Para visualizar o histórico de testes e build, incluindo a última execução:

* **Pipeline de CI/CD:** [Ações do Repositório (entrega-final-bootcamp2)](https://github.com/902-Isabela/entrega-final-bootcamp2/actions)

### 📊 Artefatos do Build

Após cada execução, o pipeline gera relatórios de testes e os artefatos de build. Para baixá-los, acesse o link acima, clique na última execução concluída e procure pela seção **Artifacts** (Artefatos).

Os artefatos gerados incluem:

1.  **`web-build-artifact`:** O pacote de build do PWA (`dist/`) que é publicado no GitHub Pages.
2.  **`playwright-report`:** O relatório HTML detalhado dos testes E2E (End-to-End) executados pelo Playwright.
3.  **`lighthouse-report`:** O relatório de performance, acessibilidade e SEO gerado pelo Lighthouse.
