/*
  Warnings:

  - The values [ADMIN] on the enum `user_role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `studentId` on the `PoinLab` table. All the data in the column will be lost.
  - You are about to drop the `activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sertifikat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sertifikat_activity` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[secret_key]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sertifikatId` to the `PoinLab` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "user_role_new" AS ENUM ('MAHASISWA', 'DOSEN', 'KAPLAB');
ALTER TABLE "public"."User" ALTER COLUMN "user_role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "user_role" TYPE "user_role_new" USING ("user_role"::text::"user_role_new");
ALTER TYPE "user_role" RENAME TO "user_role_old";
ALTER TYPE "user_role_new" RENAME TO "user_role";
DROP TYPE "public"."user_role_old";
ALTER TABLE "User" ALTER COLUMN "user_role" SET DEFAULT 'MAHASISWA';
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."PoinLab" DROP CONSTRAINT "PoinLab_activityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PoinLab" DROP CONSTRAINT "PoinLab_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sertifikat" DROP CONSTRAINT "sertifikat_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sertifikat_activity" DROP CONSTRAINT "sertifikat_activity_activityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sertifikat_activity" DROP CONSTRAINT "sertifikat_activity_sertifikatId_fkey";

-- AlterTable
ALTER TABLE "PoinLab" DROP COLUMN "studentId",
ADD COLUMN     "sertifikatId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "secret_key" TEXT;

-- DropTable
DROP TABLE "public"."activity";

-- DropTable
DROP TABLE "public"."sertifikat";

-- DropTable
DROP TABLE "public"."sertifikat_activity";

-- CreateTable
CREATE TABLE "Sertifikat" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "status_sertifikat" NOT NULL DEFAULT 'Menunggu',

    CONSTRAINT "Sertifikat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "nama_activity" TEXT NOT NULL,
    "deskripsi_activity" TEXT,
    "poin_default" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SertifikatActivity" (
    "id" SERIAL NOT NULL,
    "sertifikatId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "SertifikatActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SertifikatUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sertifikatId" INTEGER NOT NULL,

    CONSTRAINT "SertifikatUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_secret_key_key" ON "User"("secret_key");

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "Sertifikat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SertifikatActivity" ADD CONSTRAINT "SertifikatActivity_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "Sertifikat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SertifikatActivity" ADD CONSTRAINT "SertifikatActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "Sertifikat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
