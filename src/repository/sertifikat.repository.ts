import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async () => {
  return prisma.sertifikat.findMany({
    include: {
      user: true,
      sertifikatActivities: {
        include: {
          activity: {
            include: {
              poinLab: true, 
            },
          },},
      },
    },
  });
}

export const findById = async (id: number) => {
return prisma.sertifikat.findUnique({
    where: { id },
    include: {
      user: true,
      sertifikatActivities: {
        include: {
          activity: {
            include: {
              poinLab: true,
            },
          },
        },
      },
    },
  });
};

// 🔹 Buat sertifikat baru
export const createSer = async (data: any) => {
  return prisma.sertifikat.create({
    data,
  });
};

export const updateser = async (id: number, data: any) => {
  return prisma.sertifikat.update({
    where: { id },
    data:{},
  });
};

export const updateStatus = async (
  id: number,
  status: string,
  catatan_admin?: string
) => {
  return prisma.sertifikat.update({
    where: { id },
    data: { 
      deskripsi: status,
    },
  });
};

// 🔹 Hapus sertifikat
export const deleteser = async (id: number) => {
  return prisma.sertifikat.delete({
    where: { id },
  });
};
