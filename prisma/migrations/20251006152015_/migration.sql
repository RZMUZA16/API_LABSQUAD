/*
  Warnings:

  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[studentId,sertifikatId,activityId]` on the table `PoinLab` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sertifikatId,activityId]` on the table `sertifikat_activity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sertifikatId` to the `PoinLab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_kegiatan` to the `sertifikat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `sertifikat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."PoinLab" DROP CONSTRAINT "PoinLab_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sertifikat" DROP CONSTRAINT "sertifikat_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."sertifikat_activity" DROP CONSTRAINT "sertifikat_activity_sertifikatId_fkey";

-- AlterTable
ALTER TABLE "PoinLab" ADD COLUMN     "sertifikatId" INTEGER NOT NULL,
ALTER COLUMN "studentId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "activity" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "poin_default" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "deskripsi_activity" DROP NOT NULL;

-- AlterTable
ALTER TABLE "sertifikat" ADD COLUMN     "catatan_admin" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reviewed_at" TIMESTAMP(3),
ADD COLUMN     "reviewed_by" TEXT,
ADD COLUMN     "tanggal_kegiatan" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "studentId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "public"."Students";

-- CreateIndex
CREATE UNIQUE INDEX "PoinLab_studentId_sertifikatId_activityId_key" ON "PoinLab"("studentId", "sertifikatId", "activityId");

-- CreateIndex
CREATE UNIQUE INDEX "sertifikat_activity_sertifikatId_activityId_key" ON "sertifikat_activity"("sertifikatId", "activityId");

-- AddForeignKey
ALTER TABLE "sertifikat_activity" ADD CONSTRAINT "sertifikat_activity_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "sertifikat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "sertifikat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
