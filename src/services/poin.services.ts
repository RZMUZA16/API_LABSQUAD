import * as poinRepository from "../repository/poin.repository";
import type { poinDto } from "@/dto/poin.dto";

export const getAllPoin = async () => {
  return await poinRepository.findAllPoinLab();
};

export const getPoinById = async (id: number) => {
  return await poinRepository.findpoinlabById(id);
};

export const createPoin = async (data: poinDto) => {
  if (!data.sertifikatId || typeof data.sertifikatId !== "number") {
    throw new Error("sertifikatId diperlukan dan harus berupa angka");
  }
  if (typeof data.poin !== "number") {
    throw new Error("poin harus berupa angka");
  }

  return await poinRepository.createpoinlab(data);
};

export const updatePoin = async (id: number, data: Partial<poinDto>) => {
 
  if (data.sertifikatId && typeof data.sertifikatId !== "number") {
    throw new Error("sertifikatId harus berupa angka");
  }

  if (data.poin && typeof data.poin !== "number") {
    throw new Error("poin harus berupa angka");
  }

  return await poinRepository.updatepoinlab(id, data);
};

export const deletePoin = async (id: number) => {
  return await poinRepository.deletepointlab(id);
};
