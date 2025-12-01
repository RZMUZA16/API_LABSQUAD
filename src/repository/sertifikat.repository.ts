import type { sertifikatDto } from "@/dto/sertifikat.dto";
import { PrismaClient, type Sertifikat } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async () => {
  return prisma.sertifikat.findMany({
    include: {
      sertifikatUser: {
        include: { user: true },
      },
      poinLab: {
        include: {
          activity: true, 
        },
      },
    },
  });
};

export const findById = async (id: number) => {
  return prisma.sertifikat.findUnique({
    where: { id },
    include: {
      sertifikatUser: {
        include: { user: true },
      },
      poinLab: {
        include: {
          activity: true,
        },
      },
    },
  });
};

export const createSer = async (data: sertifikatDto): Promise<Sertifikat> => {
  return prisma.sertifikat.create({
    data: {
      nama: data.nama,
      deskripsi: data.deskripsi,
    },
  });
};

export const updateser = async (id: number, data: Partial<Sertifikat>) => {
  return prisma.sertifikat.update({
    where: { id },
    data,
  });
};

export const updateStatus = async (id: number,data: Partial<Sertifikat>): Promise<Sertifikat> => {
  return prisma.sertifikat.update({
    where: { id },
    data: {
      status: data.status,
    },
  });
};

export const deleteser = async (id: number) => {
  return prisma.sertifikat.delete({
    where: { id },
  });
};
