import { User as PrismaUser } from '../../generated/prisma';
declare global {
  namespace Express {
    export interface Request {
      user?: PrismaUser;
      token?: string;
    }
  }
}