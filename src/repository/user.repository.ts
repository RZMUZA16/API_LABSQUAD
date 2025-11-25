import { PrismaClient, type User, user_role } from "@prisma/client";
import type { userDto } from "../dto/user.dto";
const prisma = new PrismaClient();

export const findAll = async (role?: user_role): Promise<User[]> => {
  return prisma.user.findMany({
    where: role ? { user_role: role } : {},
    orderBy: { createdAt: "desc" },
    include: {
      sertifikat: true,
      poinLab: true,
    },
  });
};

export const findById = async (id: number): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      sertifikat: true,
      poinLab: true,
    },
  });
};

export const findByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const create = async (data: userDto): Promise<User> => {
  return prisma.user.create({
    data: {
      nama: data.nama,
      email: data.email,
      password: data.password,
    },
  });
};

export const update = async (
  id: number,
  data: Partial<userDto>
): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const remove = async (id: number): Promise<User> => {
  return prisma.user.delete({
    where: { id },
  });
};
