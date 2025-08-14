import { PrismaClient } from './generated/prisma';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function createRootUser() {
  const rootEmail = process.env.ROOT_EMAIL;
  const rootPassword = process.env.ROOT_PASSWORD;

  if (!rootEmail || !rootPassword) {
    console.error('ROOT_EMAIL and ROOT_PASSWORD must be defined in the .env file');
    process.exit(1);
  }

  const existingRootUser = await prisma.user.findUnique({
    where: { email: rootEmail },
  });

  if (existingRootUser) {
    console.log('Usuário ROOT já existe. Nenhum novo usuário criado.');
    return;
  }

  const hashedPassword = await bcrypt.hash(rootPassword, 10);

  const rootUser = await prisma.user.create({
    data: {
      email: rootEmail,
      password: hashedPassword,
      name: 'Root User',
      phone: '00000000000',
      role: 'ROOT',
    },
  });

  console.log(`Usuário ROOT criado com sucesso: ${rootUser.email}`);
}

createRootUser()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });