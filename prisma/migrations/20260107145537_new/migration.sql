-- AlterTable
ALTER TABLE "SertifikatUser" ADD COLUMN     "activityId" INTEGER,
ADD COLUMN     "status" "status_sertifikat" NOT NULL DEFAULT 'Menunggu';

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_verifiedby_fkey" FOREIGN KEY ("verifiedby") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
