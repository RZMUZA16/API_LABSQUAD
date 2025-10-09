import { prisma } from "../utils/prisma";

// 🔹 Ambil semua sertifikat (include relasi yang ada)
export const findAll = async () => {
  return await prisma.sertifikat.findMany({
    include: {
      activities: {
        include: {
          activity: true, // dari model sertifikat_activity -> activity
        },
      },
      poinLab: true,
    },
  });
};

// 🔹 Ambil satu sertifikat berdasarkan ID
export const findById = async (id: number) => {
  return await prisma.sertifikat.findUnique({
    where: { id },
    include: {
      activities: {
        include: {
          activity: true,
        },
      },
      poinLab: true,
    },
  });
};

// 🔹 Buat sertifikat baru
export const create = async (data: any) => {
  return await prisma.sertifikat.create({
    data,
  });
};

// 🔹 Update sertifikat
export const update = async (id: number, data: any) => {
  return await prisma.sertifikat.update({
    where: { id },
    data,
  });
};

// 🔹 Update status sertifikat
export const updateStatus = async (id: number, status: string, catatan_admin?: string) => {
  return await prisma.sertifikat.update({
    where: { id },
    data: { status, catatan_admin },
  });
};

// 🔹 Hapus sertifikat
export const remove = async (id: number) => {
  return await prisma.sertifikat.delete({
    where: { id },
  });
};
