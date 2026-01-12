-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nim" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_role" "user_role" NOT NULL DEFAULT 'MAHASISWA',
    "secret_key" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SertifikatUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sertifikatId" INTEGER NOT NULL,
    "activityId" INTEGER,
    "status" "status_sertifikat" NOT NULL DEFAULT 'Menunggu',
    "file_path" TEXT NOT NULL,
    "uploadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verifiedAt" TIMESTAMP(3),
    "verifiedBy" INTEGER,
    "isdelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SertifikatUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nim_key" ON "User"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_secret_key_key" ON "User"("secret_key");

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_sertifikatId_fkey" FOREIGN KEY ("sertifikatId") REFERENCES "Sertifikat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SertifikatUser" ADD CONSTRAINT "SertifikatUser_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
