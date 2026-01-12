-- A. Seminar dan Pelatihan (activityId = 13)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(11, 13, 2), -- Peserta seminar/pelatihan
(10, 13, 2), -- Panitia seminar/pelatihan
(12, 13, 3); -- Pembicara seminar/pelatihan


-- B. Kursus Terstruktur (activityId = 14)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(13, 14, 4), -- Kursus terekognisi
(14, 14, 2); -- Kursus tidak terekognisi


-- C. Program Studi (activityId = 15)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(15, 15, 14), -- Asisten Laboratorium
(16, 15, 6),  -- Asisten Praktikum
(17, 15, 14); -- Program akademik / khusus prodi


-- D. Program Kemahasiswaan (activityId = 16)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(18, 16, 4),  -- Peserta kegiatan kemahasiswaan
(19, 16, 6),  -- Panitia inti
(20, 16, 4),  -- Panitia anggota
(21, 16, 14); -- Pengurus organisasi mahasiswa


-- E. Riset Dosen (activityId = 17)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(22, 17, 32), -- Artikel internasional
(23, 17, 28), -- Artikel nasional terakreditasi
(24, 17, 24), -- Poster ilmiah
(25, 17, 6);  -- Anggota tim riset


-- F. Proyek Dosen (activityId = 18)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(26, 18, 32), -- Aplikasi digunakan industri
(27, 18, 28), -- Aplikasi bersertifikat HaKI
(28, 18, 24), -- Aplikasi lengkap
(29, 18, 12); -- Modul / sub aplikasi


-- G. Prestasi Akademik (activityId = 19)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(30, 19, 4),  -- Peserta lomba
(31, 19, 28), -- Juara nasional
(32, 19, 32); -- Juara internasional


-- H. Prestasi Non Akademik (activityId = 20)
INSERT INTO "PoinLab" ("sertifikatId", "activityId", "poin") VALUES
(30, 20, 4),  -- Peserta lomba
(31, 20, 24), -- Juara nasional
(32, 20, 28); -- Juara internasional
