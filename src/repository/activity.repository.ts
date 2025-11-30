import { PrismaClient, type activity } from "@prisma/client";
import type { activityDto } from "../dto/activity.dto";
const prisma = new PrismaClient();

export const findAllActivity = async (): Promise<activity[]> => {
  return prisma.activity.findMany({
    include: {
      poinLab: true,
      sertifikatActivities: true,
    },
  });
};

export const findActivityById = async (id: number): Promise<activity | null> => {
  return prisma.activity.findUnique({
    where: { id },
    include: {
      poinLab: true,
      sertifikatActivities: true,
    },
  });
};

export const createActivity = async (data: activityDto): Promise<activity> => {
  return prisma.activity.create({
    data,
  });
};

export const updateActivity = async (id: number, data: activityDto): Promise<activity> => {
  return prisma.activity.update({
    where: { id },
    data,
  });
};

export const deleteActivity = async (id: number): Promise<activity> => {
  return prisma.activity.delete({
    where: { id },
  });
};

export default prisma;
