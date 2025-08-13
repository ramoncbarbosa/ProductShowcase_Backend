import { Request, Response, NextFunction } from 'express';
import { Role } from '../generated/prisma';
import { AppError } from '@exceptions/AppError/AppError';

export function isAuthorized(allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;
    if (!userRole) {
      return next(new AppError('Usuário não autenticado', 401));
    }

    if (!allowedRoles.includes(userRole)) {
      throw new AppError('Acesso negado. Você não tem permissão.', 403);
    }

    next();
  };
}