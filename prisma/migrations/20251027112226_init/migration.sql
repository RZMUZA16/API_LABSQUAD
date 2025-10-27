/*
  Warnings:

  - You are about to drop the column `sertifikatId` on the `PoinLab` table. All the data in the column will be lost.
  - The `studentId` column on the `PoinLab` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `catatan_admin` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `deskripsi_sertifikat` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `fileupload` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `nama_sertifikat` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `reviewed_at` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `reviewed_by` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_kegiatan` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal_upload` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `tipe_file` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `tipe_sertifikat` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `ukuran_file` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `sertifikat` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `sertifikat_activity` table. All the data in the column will be lost.
  - Added the required column `nama` to the `sertifikat` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('MAHASISWA', 'DOSEN', 'KAPLAB', 'ADMIN');

-- DropForeignKey
ALTER TABLE "public"."PoinLab" DROP CONSTRAINT "PoinLab_activityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PoinLab" DROP CONSTRAINT "PoinLab_sertifikatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sertifikat_activity" DROP CONSTRAINT "sertifikat_activity_sertifikatId_fkey";

-- DropIndex
DROP INDEX "public"."PoinLab_studentId_sertifikatId_activityId_key";

-- DropIndex
DROP INDEX "public"."sertifikat_activity_sertifikatId_activityId_key";

-- AlterTable
ALTER TABLE "PoinLab" DROP COLUMN "sertifikatId",
DROP COLUMN "studentId",
ADD COLUMN     "studentId" INTEGER,
ALTER COLUMN "activityId" DROP NOT NULL,
ALTER COLUMN "poin" DROP DEFAULT;

-- AlterTable
ALTER TABLE "sertifikat" DROP COLUMN "catatan_admin",
DROP COLUMN "deskripsi_sertifikat",
DROP COLUMN "fileupload",
DROP COLUMN "nama_sertifikat",
DROP COLUMN "reviewed_at",
DROP COLUMN "reviewed_by",
DROP COLUMN "status",
DROP COLUMN "studentId",
DROP COLUMN "tanggal_kegiatan",
DROP COLUMN "tanggal_upload",
DROP COLUMN "tipe_file",
DROP COLUMN "tipe_sertifikat",
DROP COLUMN "ukuran_file",
DROP COLUMN "updatedAt",
ADD COLUMN     "deskripsi" TEXT,
ADD COLUMN     "nama" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "sertifikat_activity" DROP COLUMN "createdAt";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sertifikat_activity" ADD CONSTRAINT "sertifikat_activity_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "sertifikat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
