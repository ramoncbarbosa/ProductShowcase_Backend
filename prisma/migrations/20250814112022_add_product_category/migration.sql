/*
  Warnings:

  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ProductCategory" AS ENUM ('ROUPAS', 'SAUDE', 'JOIAS');

-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "category" "public"."ProductCategory" NOT NULL;
