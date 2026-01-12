/*
  Warnings:

  - You are about to drop the column `status` on the `Sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Sertifikat` table. All the data in the column will be lost.
  - You are about to drop the `SertifikatActivity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `file_path` to the `SertifikatUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."SertifikatActivity" DROP CONSTRAINT "SertifikatActivity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SertifikatActivity" DROP CONSTRAINT "SertifikatActivity_sertifikatId_fkey";

-- AlterTable
ALTER TABLE "Sertifikat" DROP COLUMN "status",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "SertifikatUser" ADD COLUMN     "file_path" TEXT NOT NULL,
ADD COLUMN     "uploadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "verifiedAt" TIMESTAMP(3),
ADD COLUMN     "verifiedby" INTEGER;

-- DropTable
DROP TABLE "public"."SertifikatActivity";
