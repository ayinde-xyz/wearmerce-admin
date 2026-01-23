/*
  Warnings:

  - Added the required column `caption` to the `Billboard` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BillboardSize" AS ENUM ('Landscape', 'Portrait', 'Square');

-- AlterTable
ALTER TABLE "Billboard" ADD COLUMN     "caption" TEXT NOT NULL,
ADD COLUMN     "size" "BillboardSize" NOT NULL DEFAULT 'Landscape';
