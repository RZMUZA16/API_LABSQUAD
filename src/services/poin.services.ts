import * as poinRepository from "../repository/poin.repository";

export const getAllPoin = async () => {
  return await poinRepository.findAllPoinLab();
};

export const getPoinById = async (id: number) => {
  return await poinRepository.findpoinlabById(id);
};

export const createPoin = async (data: any) => {
  // Validasi data (opsional)
  if (typeof data.value !== "number" || !data.description) {
    throw new Error("Data poin tidak lengkap");
  }
  return await poinRepository.createpoinlab(data);
};

export const updatePoin = async (id: number, data: any) => {
  return await poinRepository.updatepoinlab(id,data);
};

export const deletePoin = async (id: number) => {
  return await poinRepository.deletepointlab(id);
};