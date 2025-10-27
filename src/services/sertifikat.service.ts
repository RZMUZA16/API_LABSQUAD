import * as SertifikatService  from "../repository/sertifikat.repository";


export const getAllSertifikat = async () => {
  return await SertifikatService.findAll();
};

// Get sertifikat by ID
export const getSertifikatById = async (id: number) => {
  return await SertifikatService.findById(id);
};

// Create sertifikat
export const createSertifikat = async (data: any) => {
  return await SertifikatService.createSer(data);
};

// Update sertifikat
export const updateSertifikatStatus = async (id: number, data: any) => {
  return await SertifikatService.updateStatus(id, data.status, data.catatan_admin);
};

// Delete sertifikat
export const deleteSertifikat = async (id: number) => {
  return await SertifikatService.deleteser(id);
};

export const uploadSertifikat = async (id: number,data: any) => {
  return await SertifikatService.updateser(id, data);
}
