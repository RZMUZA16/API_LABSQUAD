import type { poinDto } from "@/dto/poin.dto";
import { PrismaClient, type PoinLab } from "@prisma/client";

const prisma = new PrismaClient();
export const findAllPoinLab = async (): Promise<PoinLab[]> => {
  return prisma.poinLab.findMany({
    include: {
      user: true,
      activity: true,
    },
  });
};

export const findpoinlabById = async (id: number): Promise<PoinLab | null> => {
  return prisma.poinLab.findUnique({
    where: { id },
    include: {
      user: true,
      activity: true,
    },
  });
};

export const createpoinlab = async (data: poinDto): Promise<PoinLab> => {
  return prisma.poinLab.create({
    data,
  });
};

export const updatepoinlab = async (id: number,data: Partial<poinDto>): Promise<PoinLab> => {
  return prisma.poinLab.update({
    where: { id },
    data,
  });
};

export const deletepointlab = async (id: number): Promise<PoinLab> => {
  return prisma.poinLab.delete({
    where: { id },
  });
};
