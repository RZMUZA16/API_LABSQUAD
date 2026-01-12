import * as inputSertifikatRepository from '../repository/inputSertifikat.repository';

export const getAllInputSertifikats = async () => {
  return await inputSertifikatRepository.findAllSertifikatUser();
}

export const getInputSertifikatById = async (id: number) => {
  return await inputSertifikatRepository.findSertifikatUserById(id);
}

export const createInputSertifikat = async (data: any) => {
  return await inputSertifikatRepository.createSertifikatUser(data);
}       
export const updateInputSertifikat = async (id: number, data: any) => {
  return await inputSertifikatRepository.updateSertifikatUser(id, data);
}   
export const deleteInputSertifikat = async (id: number) => {
  return await inputSertifikatRepository.deleteSertifikatUser(id);
};

export const verifySertifikat = async (id: number, status_sertifikat: boolean) => {
  return await inputSertifikatRepository.verifySertifikatUser(id, status_sertifikat);
}
export default inputSertifikatRepository;