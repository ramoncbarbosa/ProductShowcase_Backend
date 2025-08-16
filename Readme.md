# ProductShowcase Backend

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT">
</p>

---

### 🇧🇷 Versão em Português

Este é o backend da aplicação de Catálogo Online, desenvolvido com **NestJS**, **TypeScript** e **Prisma**. O objetivo é fornecer uma API robusta e segura para gerenciar o catálogo de produtos, usuários e vendas.

#### Arquitetura do Projeto

O projeto segue a arquitetura de módulos e injeção de dependências, com responsabilidades divididas em:

-   **`Módulo`**: Agrupa e organiza funcionalidades relacionadas.
-   **`Controller`**: Recebe requisições HTTP, valida dados e chama a camada de serviço.
-   **`Service`**: Contém a lógica de negócio principal da aplicação.
-   **`Repository`**: Interage com o banco de dados via Prisma, abstraindo a lógica de acesso aos dados.
-   **`DTO`**: Define a estrutura dos dados transferidos entre as camadas, garantindo a segurança e a consistência da API.

#### Tecnologias Utilizadas

-   **Framework**: NestJS
-   **Linguagem**: TypeScript
-   **ORM**: Prisma
-   **Banco de Dados**: PostgreSQL
-   **Autenticação**:
    -   **JWT** (JSON Web Tokens)
    -   **Bcrypt** (Criptografia de senha)
-   **Serviços**:
    -   **Nodemailer** (Serviço de Email)
    -   **Passport.js** com **Google OAuth** (Autenticação Social)
-   **Testes**: **Jest** e **Supertest** (para testes unitários e de integração)

#### Como Iniciar o Ambiente de Desenvolvimento

Para rodar o projeto localmente, siga estes passos:

1.  **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/) e [Docker](https://www.docker.com/) instalados.
2.  **Instalação das Dependências**: Na pasta `ProductShowcase_Backend`, execute `npm install`.
3.  **Configuração do Banco de Dados**:
    -   Crie um arquivo `.env` na raiz do projeto com suas variáveis de ambiente.
    -   Suba o container do PostgreSQL usando Docker: `docker-compose up -d`.
    -   Execute as migrações do Prisma: `npx prisma migrate dev --name init`.
4.  **Execução do Servidor**: Para iniciar o servidor em modo de desenvolvimento, use o comando `npm run start:dev`. O servidor rodará em `http://localhost:3000`.

---

### 🇺🇸 English Version

This is the backend for the Online Catalog web application, built with **NestJS**, **TypeScript**, and **Prisma**. The goal is to provide a robust and secure API for managing products, users, and sales.

#### Project Architecture

The project follows a modular and dependency injection architecture, with responsibilities divided into:

-   **`Module`**: Groups and organizes related functionalities.
-   **`Controller`**: Receives HTTP requests, validates data, and calls the service layer.
-   **`Service`**: Contains the core business logic of the application.
-   **`Repository`**: Interacts with the database via Prisma, abstracting data access logic.
-   **`DTO`**: Defines the structure of data transferred between layers, ensuring API security and consistency.

#### Technologies Used

-   **Framework**: NestJS
-   **Language**: TypeScript
-   **ORM**: Prisma
-   **Database**: PostgreSQL
-   **Authentication**:
    -   **JWT** (JSON Web Tokens)
    -   **Bcrypt** (Password encryption)
-   **Services**:
    -   **Nodemailer** (Email Service)
    -   **Passport.js** with **Google OAuth** (Social Authentication)
-   **Testing**: **Jest** and **Supertest** (for unit and integration tests)

#### Getting Started

To run the project locally, follow these steps:

1.  **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/), and [Docker](https://www.docker.com/) installed.
2.  **Install Dependencies**: In the `ProductShowcase_Backend` folder, run `npm install`.
3.  **Database Configuration**:
    -   Create a `.env` file in the project root with your environment variables.
    -   Start the PostgreSQL container using Docker: `docker-compose up -d`.
    -   Run Prisma migrations: `npx prisma migrate dev --name init`.
4.  **Server Execution**: To start the server in development mode, use the command `npm run start:dev`. The server will run at `http://localhost:3000`.
