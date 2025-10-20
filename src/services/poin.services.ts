import * as poinRepository from "../repository/poin.repository";

export const getAllPoin = async () => {
  return await poinRepository.findAll();
};

export const getPoinById = async (id: number) => {
  return await poinRepository.findById(id);
};

export const createPoin = async (data: any) => {
  // Validasi data (opsional)
  if (typeof data.value !== "number" || !data.description) {
    throw new Error("Data poin tidak lengkap");
  }
  return await poinRepository.create(data);
};

export const updatePoin = async (id: number, data: any) => {
  return await poinRepository.update(id, data);
};

export const deletePoin = async (id: number) => {
  return await poinRepository.remove(id);
};