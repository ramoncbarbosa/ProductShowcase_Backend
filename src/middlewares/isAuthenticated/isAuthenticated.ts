import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrismaClient, User as PrismaUser } from '../generated/prisma';
import { AppError } from '@exceptions/AppError/AppError';

const prisma = new PrismaClient();

interface DecodedToken extends JwtPayload {
  id: string;
  email: string;
  role: PrismaUser['role'];
}

export async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Não autenticado: token ausente ou inválido', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET não está definido.');
    }

    const decoded = jwt.verify(token, secret) as DecodedToken;

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      throw new AppError('Usuário não encontrado.', 401);
    }

    // verificação de status para todos os usuários
    // TODO: Adicionar um campo de status no model User, se necessário.
    // if (user.status !== "active") {
    //   throw new AppError("Acesso negado. Sua conta está inativa.", 403);
    // }

    // Adiciona o usuário ao objeto de requisição (req) para uso posterior
    req.user = user;
    return next();

  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return next(new AppError('Token inválido.', 401));
    }
    return next(error);
  }
}