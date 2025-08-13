import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import router from '@routes/index.ts';
import { AppError } from '@exceptions/AppError/AppError';

const app = express();

app.use(express.json()); // Habilita o Express a ler JSON no corpo das requisições
app.use(cors()); // Permite requisições de diferentes origens (para o frontend)
app.use(helmet()); // Adiciona cabeçalhos de segurança básicos
app.use(passport.initialize()); // Inicializa o Passport para autenticação

// Rotas da aplicação
app.use('/api', router);

// Documentação da API com Swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // Erros inesperados
  console.error(err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;