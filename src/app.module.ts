import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ProductsResolver } from './products/products.resolver';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ProductsResolver],
})
export class AppModule {}
