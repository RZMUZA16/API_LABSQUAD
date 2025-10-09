-- CreateTable
CREATE TABLE "PoinLab" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    "poin" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PoinLab_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoinLab" ADD CONSTRAINT "PoinLab_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
