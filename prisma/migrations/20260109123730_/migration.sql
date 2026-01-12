/*
  Warnings:

  - You are about to drop the column `verifiedby` on the `SertifikatUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nim]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nim` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."SertifikatUser" DROP CONSTRAINT "SertifikatUser_verifiedby_fkey";

-- AlterTable
ALTER TABLE "SertifikatUser" DROP COLUMN "verifiedby",
ADD COLUMN     "verifiedBy" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nim" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_nim_key" ON "User"("nim");

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
