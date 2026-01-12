/*
  Warnings:

  - Made the column `activityId` on table `SertifikatUser` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."SertifikatUser" DROP CONSTRAINT "SertifikatUser_activityId_fkey";

-- AlterTable
ALTER TABLE "SertifikatUser" ALTER COLUMN "activityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
