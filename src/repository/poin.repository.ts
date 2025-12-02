import type { poinDto } from "@/dto/poin.dto";
import { PrismaClient, type PoinLab } from "@prisma/client";

const prisma = new PrismaClient();
export const findAllPoinLab = async (): Promise<PoinLab[]> => {
  return prisma.poinLab.findMany({
    include: {
      activity: true,
    },
  });
};

export const findpoinlabById = async (id: number): Promise<PoinLab | null> => {
  return prisma.poinLab.findUnique({
    where: { id },
    include: {
      activity: true,
    },
  });
};


export const createpoinlab = async (data: poinDto): Promise<PoinLab> => {
  return prisma.poinLab.create({
    data: {
      poin: data.poin,
      sertifikat: {
        connect: { id: data.sertifikatId }
      },
      activity: data.activityId
        ? { connect: { id: data.activityId } }
        : undefined
    },
    include: {
      sertifikat: true,
      activity: true
    }
  });
};

export const updatepoinlab = async (
  id: number,
  data: Partial<poinDto>
): Promise<PoinLab> => {
  return prisma.poinLab.update({
    where: { id },
    data: {
      poin: data.poin,
      sertifikat: data.sertifikatId
        ? { connect: { id: data.sertifikatId } }
        : undefined,
      activity: data.activityId
        ? { connect: { id: data.activityId } }
        : undefined
    },
    include: {
      sertifikat: true,
      activity: true
    }
  });
};


export const deletepointlab = async (id: number): Promise<PoinLab> => {
  return prisma.poinLab.delete({
    where: { id },
  });
};
