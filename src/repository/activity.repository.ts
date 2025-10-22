import { PrismaClient } from '@prisma/client';
type activity={
  id :number;
  nama_activity :string;
  deskripsi ?:string;
  tanggal_activity :Date;
  createdAt :Date;
  updatedAt :Date;
};
const prisma = new PrismaClient();

// Type untuk create dan update
export type CreateActivity = Omit<activity, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateActivity = Partial<CreateActivity>;

export const findAllActivity = async (): Promise<activity[]> => {
  return await prisma.activity.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

export const findActivityById = async (id: number): Promise<activity | null> => {
  return await prisma.activity.findUnique({
    where: { id },
  });
};

export const createActivity = async (data: CreateActivity): Promise<activity> => {
  return await prisma.activity.create({
    data,
  });
};

export const updateActivity = async (id: number, data: UpdateActivity): Promise<activity | null> => {
  return await prisma.activity.update({
    where: { id },
    data,
  }).catch(() => null); 
};

export const deleteActivity = async (id: number): Promise<boolean> => {
  try {
    await prisma.activity.delete({
      where: { id },
    });
    return true;
  } catch {
    return false;
  }
};
