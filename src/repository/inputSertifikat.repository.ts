import type { CreateSertifikatUserDto, UpdateSertifikatUserDto } from "@/dto/inputSertifikat.dto";
import { PrismaClient, type SertifikatUser } from "@prisma/client";
import { status_sertifikat } from "@prisma/client";


const prisma = new PrismaClient();

export const findAllSertifikatUser = async (): Promise<SertifikatUser[]> => {
  return prisma.sertifikatUser.findMany({
    include: {
      user: true,
      sertifikat: true,
      activity: true,
    },
  });
};

export const findSertifikatUserById = async (
  id: number
): Promise<SertifikatUser | null> => {
  return prisma.sertifikatUser.findUnique({
    where: { id },
    include: {
      user: true,
      sertifikat: true,
      activity: true,
    },
  });
};

export const createSertifikatUser = async ( data: CreateSertifikatUserDto): Promise<SertifikatUser> => {
  return prisma.sertifikatUser.create({
    data: {
      user: { connect: { id: data.userId } },
      sertifikat: { connect: { id: data.sertifikatId } },
      activity: { connect: { id: data.activityId } },
      file_path: data.file_path,

      status: status_sertifikat.Menunggu,
    },
    include: {
      user: true,
      sertifikat: true,
      activity: true,
    },
  });
};

export const updateSertifikatUser = async (
  id: number,
  data: UpdateSertifikatUserDto
): Promise<SertifikatUser> => {
  return prisma.sertifikatUser.update({
    where: { id },
    data: {
      user: { connect: { id: data.userId } },
      sertifikat: { connect: { id: data.sertifikatId } },
      activity: { connect: { id: data.activityId } },
      file_path: data.file_path,
    },
    include: {
      user: true,
      sertifikat: true,
      activity: true,
    },
  });
};

export const deleteSertifikatUser = async (
  id: number
): Promise<SertifikatUser> => {
  return prisma.sertifikatUser.delete({
    where: { id },
  });
};

export const verifySertifikatUser = async (id: number, isApproved: boolean) => {
  return prisma.sertifikatUser.update({
    where: { id },
    data: {
      status: isApproved
        ? status_sertifikat.Diterima
        : status_sertifikat.Ditolak,
    },
  });
};


export default prisma;
