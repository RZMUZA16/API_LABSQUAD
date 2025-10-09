-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "Nama_mahasiswa" TEXT NOT NULL,
    "nim" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sertifikat" (
    "id" SERIAL NOT NULL,
    "nama_sertifikat" TEXT NOT NULL,
    "tipe_sertifikat" TEXT NOT NULL,
    "deskripsi" TEXT,
    "tanggal_upload" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileupload" TEXT,

    CONSTRAINT "sertifikat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sertifikat_activity" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "sertifikat_activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_nim_key" ON "Students"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");
