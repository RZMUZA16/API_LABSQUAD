import { PrismaClient, type User, user_role } from "@prisma/client";
import type { CreateUserDto, UpdateUserDto, userDto } from "../dto/user.dto";
const prisma = new PrismaClient();

export const findAll = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      nama: true,
      nim: true,
      email: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      sertifikatUser: {
        where: { isdelete: false },
        include: {
          sertifikat: {
            include: {
              poinLab: {
                take: 1,
              },
            },
          },
        },
      },
    },
  });
};

export const findByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const create = async (data: CreateUserDto): Promise<User> => {
  return prisma.user.create({
    data: {
      ...data,
      nim: String(data.nim),
    },
  });
};

export const update = async (
  id: number,
  data: Partial<UpdateUserDto>
): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data: {
      ...data,
      nim: String(data.nim),
    },
  });
};

export const remove = async (id: number): Promise<User> => {
  return prisma.user.delete({
    where: { id },
  });
};

export const approveSertifikat = async (
  userId: number,
  sertifikatId: number
) => {
  return prisma.sertifikatUser.updateMany({
    where: {
      userId,
      sertifikatId,
      isdelete: false,
    },
    data: {
      isdelete: true,
    },
  });
};

export default prisma;
