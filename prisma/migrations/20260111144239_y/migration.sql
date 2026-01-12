/*
  Warnings:

  - You are about to drop the column `nim` on the `SertifikatUser` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."SertifikatUser_nim_key";

-- AlterTable
ALTER TABLE "SertifikatUser" DROP COLUMN "nim";
