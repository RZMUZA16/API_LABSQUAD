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


export const createpoinlab = async (data: {
  studentId?: number;
  activityId?: number;
  poin: number;
}): Promise<PoinLab> => {
  return prisma.poinLab.create({
    data,
  });
};


export const updatepoinlab = async (
  id: number,
  data: {
    studentId?: number;
    activityId?: number;
    poin: number;
  }
): Promise<PoinLab> => {
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
