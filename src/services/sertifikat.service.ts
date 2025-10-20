import prisma from "../utils/prisma";

// Get all sertifikat
export const getAllSertifikat = async () => {
  return await prisma.sertifikat.findMany();
};

// Get sertifikat by ID
export const getSertifikatById = async (id: number) => {
  return await prisma.sertifikat.findUnique({
    where: { id },
  });
};

// Create sertifikat
export const createSertifikat = async (data: any) => {
  return await prisma.sertifikat.create({
    data,
  });
};

// Update sertifikat
export const updateSertifikatStatus = async (id: number, data: any) => {
  return await prisma.sertifikat.update({
    where: { id },
    data,
  });
};

// Delete sertifikat
export const deleteSertifikat = async (id: number) => {
  return await prisma.sertifikat.delete({
    where: { id },
  });
};

export const uploadSertifikat = async (data: any) => {
  return await prisma.sertifikat.create({
    data,
  });
}