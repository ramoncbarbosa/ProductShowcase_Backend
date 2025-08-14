# Catálogo Online - Backend

Este é o backend da aplicação de Catálogo Online, desenvolvido com **Express**, **TypeScript** e **Prisma**. O objetivo é fornecer uma API robusta e segura para gerenciar o catálogo de produtos, usuários e vendas.

## Arquitetura do Projeto

O projeto segue a arquitetura de camadas, dividindo as responsabilidades da seguinte forma:

-   **`controller`**: Recebe requisições HTTP, valida dados e chama a camada de serviço.
-   **`service`**: Contém a lógica de negócio principal da aplicação.
-   **`repository`**: Interage com o banco de dados via Prisma, abstraindo a lógica de acesso aos dados.
-   **`route`**: Define os endpoints da API e direciona as requisições para os controladores.
-   **`config`**: Armazena as configurações globais, incluindo as do **Passport**, **Swagger**, e variáveis de ambiente.
-   **`middleware`**: Funções intermediárias, como autenticação com **JWT** e validação de `reCAPTCHA`.
-   **`dto`**: Define a estrutura dos dados transferidos entre as camadas, garantindo a segurança e a consistência da API.

## Tecnologias Utilizadas

-   **Framework**: Node.js + Express
-   **Linguagem**: TypeScript
-   **ORM**: Prisma
-   **Banco de Dados**: PostgreSQL
-   **Segurança**: **Helmet** (para cabeçalhos de segurança)
-   **Autenticação**:
    -   **JWT** (JSON Web Tokens)
    -   **Bcrypt** (Criptografia de senha)
    -   **Passport.js** com **Google OAuth**
-   **Validação de Segurança**: **Google reCAPTCHA**
-   **Testes**: **Jest** e **Supertest** (para testes unitários e de integração)
-   **Documentação da API**: **Swagger**
-   **Comunicação entre serviços**: **Axios**
-   **Serviço de Email**: Nodemailer

## Como Iniciar o Ambiente de Desenvolvimento

Para rodar o projeto localmente, siga estes passos:

1.  **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/) e [Docker](https://www.docker.com/) instalados.
2.  **Instalação das Dependências**: Na pasta `backend`, execute `npm install`.
3.  **Configuração do Banco de Dados**:
    -   Crie um arquivo `.env` na raiz do projeto com as suas variáveis de ambiente.
    -   Suba o container do PostgreSQL usando Docker: `docker-compose up -d`.
    -   Execute as migrações do Prisma: `npx prisma migrate dev --name init`.
4.  **Execução do Servidor**: Para iniciar o servidor em modo de desenvolvimento, use o comando `npm run dev`. O servidor rodará em `http://localhost:3000`. A documentação da API estará disponível em `http://localhost:3000/api-docs`.

## Contato e Suporte

Para dúvidas ou suporte, entre em contato.