import { User as PrismaUser } from '../generated/prisma';

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponseDTO {
  user: {
    id: string;
    name: string | null;
    email: string;
    role: PrismaUser['role'];
  };
  token: string;
}

export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  phone: string;
}