/*
  Warnings:

  - You are about to drop the column `Nama_mahasiswa` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `deskripsi` on the `sertifikat` table. All the data in the column will be lost.
  - Added the required column `nama_mahasiswa` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deskripsi_activity` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_activity` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `sertifikat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipe_file` to the `sertifikat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ukuran_file` to the `sertifikat` table without a default value. This is not possible if the table is not empty.
  - Made the column `fileupload` on table `sertifikat` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `activityId` to the `sertifikat_activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sertifikatId` to the `sertifikat_activity` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "status_sertifikat" AS ENUM ('Ditolak', 'Menunggu', 'Diterima');

-- AlterTable
ALTER TABLE "Students" DROP COLUMN "Nama_mahasiswa",
ADD COLUMN     "nama_mahasiswa" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "activity" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deskripsi_activity" TEXT NOT NULL,
ADD COLUMN     "nama_activity" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sertifikat" DROP COLUMN "deskripsi",
ADD COLUMN     "deskripsi_sertifikat" TEXT,
ADD COLUMN     "status" "status_sertifikat" NOT NULL DEFAULT 'Menunggu',
ADD COLUMN     "studentId" INTEGER NOT NULL,
ADD COLUMN     "tipe_file" TEXT NOT NULL,
ADD COLUMN     "ukuran_file" INTEGER NOT NULL,
ALTER COLUMN "fileupload" SET NOT NULL;

-- AlterTable
ALTER TABLE "sertifikat_activity" ADD COLUMN     "activityId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "sertifikatId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sertifikat_activity" ADD CONSTRAINT "sertifikat_activity_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "sertifikat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sertifikat_activity" ADD CONSTRAINT "sertifikat_activity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
