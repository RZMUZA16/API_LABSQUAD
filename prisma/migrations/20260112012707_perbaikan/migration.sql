/*
  Warnings:

  - Made the column `activityId` on table `PoinLab` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."PoinLab" DROP CONSTRAINT "PoinLab_activityId_fkey";

-- AlterTable
ALTER TABLE "PoinLab" ALTER COLUMN "activityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
