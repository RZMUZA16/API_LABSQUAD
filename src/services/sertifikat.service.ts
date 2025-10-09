import * as sertifikatRepository from "../repository/sertifikat.repository";

export const getAllSertifikat = async () => {
  return await sertifikatRepository.findAll();
};

export const getSertifikatById = async (id: string) => {
  return await sertifikatRepository.findById(id);
};

export const uploadSertifikat = async (data: any) => {
  // Validasi data (opsional)
  if (!data.nama || !data.fileUrl || !data.mahasiswaId) {
    throw new Error("Data sertifikat tidak lengkap");
  }

  return await sertifikatRepository.create(data);
};

export const updateSertifikat = async (id: string, data: any) => {
  return await sertifikatRepository.update(id, data);
};

export const updateSertifikatStatus = async (id: string, status: string) => {
  return await sertifikatRepository.updateStatus(id, status);
};

export const deleteSertifikat = async (id: string) => {
  return await sertifikatRepository.remove(id);
};
