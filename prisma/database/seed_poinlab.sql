-- ===============================
-- SEED DATA POINLAB
-- ===============================

-- A. Seminar dan Pelatihan (activityId = 13)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(11, 13, 2),
(10, 13, 2),
(12, 13, 3);

-- B. Kursus Terstruktur (activityId = 14)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(13, 14, 4),
(14, 14, 2);

-- C. Program Studi (activityId = 15)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(15, 15, 14),
(16, 15, 6),
(17, 15, 14);

-- D. Program Kemahasiswaan (activityId = 16)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(18, 16, 4),
(19, 16, 6),
(20, 16, 4),
(21, 16, 14);

-- E. Riset Dosen (activityId = 17)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(22, 17, 32),
(23, 17, 28),
(24, 17, 24),
(25, 17, 6);

-- F. Proyek Dosen (activityId = 18)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(26, 18, 32),
(27, 18, 28),
(28, 18, 24),
(29, 18, 12);

-- G. Prestasi Akademik (activityId = 19)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(30, 19, 4),
(31, 19, 28),
(32, 19, 32);

-- H. Prestasi Non Akademik (activityId = 20)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(30, 20, 4),
(31, 20, 24),
(32, 20, 28);
