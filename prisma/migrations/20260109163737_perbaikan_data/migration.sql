/*
  Warnings:

  - You are about to drop the `SertifikatUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."SertifikatUser" DROP CONSTRAINT "SertifikatUser_activityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SertifikatUser" DROP CONSTRAINT "SertifikatUser_sertifikatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SertifikatUser" DROP CONSTRAINT "SertifikatUser_userId_fkey";

-- DropTable
DROP TABLE "public"."SertifikatUser";

-- DropTable
DROP TABLE "public"."User";
