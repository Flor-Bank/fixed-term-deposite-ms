/*
  Warnings:

  - Added the required column `ownerId` to the `FixedTermDeposite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FixedTermDeposite" ADD COLUMN     "ownerId" TEXT NOT NULL;
