/*
  Warnings:

  - A unique constraint covering the columns `[nim]` on the table `SertifikatUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nim` to the `SertifikatUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SertifikatUser" ADD COLUMN     "nim" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SertifikatUser_nim_key" ON "SertifikatUser"("nim");
