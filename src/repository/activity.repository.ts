import { PrismaClient, type Activity } from "@prisma/client";
import type { activityDto } from "../dto/activity.dto";
const prisma = new PrismaClient();

export const findAllActivity = async (): Promise<Activity[]> => {
  return prisma.activity.findMany({
    include: {
      poinLab: true,
    },
  });
};

export const findActivityById = async (id: number): Promise<Activity | null> => {
  return prisma.activity.findUnique({
    where: { id },
    include: {
      poinLab: true,
    },
  });
};

export const createActivity = async (data: activityDto): Promise<Activity> => {
  return prisma.activity.create({
    data,
  });
};

export const updateActivity = async (id: number,data: activityDto): Promise<Activity> => {
  return prisma.activity.update({
    where: { id },
    data,
  });
};

export const deleteActivity = async (id: number): Promise<Activity> => {
  return prisma.activity.delete({
    where: { id },
  });
};

export default prisma;
