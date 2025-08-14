# ProductShowcase Backend

---

### 🇧🇷 Versão em Português

Este é o backend da aplicação de Catálogo Online, desenvolvido com **Express**, **TypeScript** e **Prisma**. O objetivo é fornecer uma API robusta e segura para gerenciar o catálogo de produtos, usuários e vendas.

#### Arquitetura do Projeto

O projeto segue a arquitetura de camadas, dividindo as responsabilidades da seguinte forma:

-   **`controller`**: Recebe requisições HTTP, valida dados e chama a camada de serviço.
-   **`service`**: Contém a lógica de negócio principal da aplicação.
-   **`repository`**: Interage com o banco de dados via Prisma, abstraindo a lógica de acesso aos dados.
-   **`route`**: Define os endpoints da API e direciona as requisições para os controladores.
-   **`config`**: Armazena as configurações globais, incluindo as do **Passport** e variáveis de ambiente.
-   **`middleware`**: Funções intermediárias, como autenticação com **JWT**.
-   **`dto`**: Define a estrutura dos dados transferidos entre as camadas, garantindo a segurança e a consistência da API.

#### Tecnologias Utilizadas

-   **Framework**: Node.js + Express
-   **Linguagem**: TypeScript
-   **ORM**: Prisma
-   **Banco de Dados**: PostgreSQL
-   **Segurança**: **Helmet** (para cabeçalhos de segurança)
-   **Autenticação**:
    -   **JWT** (JSON Web Tokens)
    -   **Bcrypt** (Criptografia de senha)
    -   **Passport.js** com **Google OAuth**
-   **Testes**: **Jest** e **Supertest** (para testes unitários e de integração)
-   **Serviço de Email**: Nodemailer

#### Como Iniciar o Ambiente de Desenvolvimento

Para rodar o projeto localmente, siga estes passos:

1.  **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/) e [Docker](https://www.docker.com/) instalados.
2.  **Instalação das Dependências**: Na pasta `backend`, execute `npm install`.
3.  **Configuração do Banco de Dados**:
    -   Crie um arquivo `.env` na raiz do projeto com suas variáveis de ambiente.
    -   Suba o container do PostgreSQL usando Docker: `docker-compose up -d`.
    -   Execute as migrações do Prisma: `npx prisma migrate dev --name init`.
4.  **Execução do Servidor**: Para iniciar o servidor em modo de desenvolvimento, use o comando `npm run dev`. O servidor rodará em `http://localhost:3000`.

---

### 🇺🇸 English Version

This is the backend for the Online Catalog web application, built with **Express**, **TypeScript**, and **Prisma**. The goal is to provide a robust and secure API for managing products, users, and sales.

#### Project Architecture

The project follows a layered architecture, dividing responsibilities as follows:

-   **`controller`**: Receives HTTP requests, validates data, and calls the service layer.
-   **`service`**: Contains the core business logic of the application.
-   **`repository`**: Interacts with the database via Prisma, abstracting data access logic.
-   **`route`**: Defines the API endpoints and directs requests to the controllers.
-   **`config`**: Stores global configurations, including **Passport** and environment variables.
-   **`middleware`**: Intermediary functions, such as **JWT** authentication.
-   **`dto`**: Defines the structure of data transferred between layers, ensuring API security and consistency.

#### Technologies Used

-   **Framework**: Node.js + Express
-   **Language**: TypeScript
-   **ORM**: Prisma
-   **Database**: PostgreSQL
-   **Security**: **Helmet** (for security headers)
-   **Authentication**:
    -   **JWT** (JSON Web Tokens)
    -   **Bcrypt** (Password encryption)
    -   **Passport.js** with **Google OAuth**
-   **Testing**: **Jest** and **Supertest** (for unit and integration tests)
-   **Email Service**: Nodemailer

#### Getting Started

To run the project locally, follow these steps:

1.  **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/), and [Docker](https://www.docker.com/) installed.
2.  **Install Dependencies**: In the `backend` folder, run `npm install`.
3.  **Database Configuration**:
    -   Create a `.env` file in the project root with your environment variables.
    -   Start the PostgreSQL container using Docker: `docker-compose up -d`.
    -   Run Prisma migrations: `npx prisma migrate dev --name init`.
4.  **Server Execution**: To start the server in development mode, use the command `npm run dev`. The server will run at `http://localhost:3000`.