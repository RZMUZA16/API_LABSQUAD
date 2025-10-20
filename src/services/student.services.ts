// services/sertifikatService.ts
import {  httpClient } from '../utils/httpClient';

export const sertifikatService = {
  async getAllStudent() {
    const response = await httpClient.get("/sertifikat");
    return response.data;
  },

  async getStudentById(id: number) {
    const response = await httpClient.get(`/sertifikat/${id}`);
    return response.data;
  },

  async create(data: any) {
    const response = await httpClient.post("/sertifikat", data);
    return response.data;
  },

  async update(id: number, data: any) {
    const response = await httpClient.put(`/sertifikat/${id}`, data);
    return response.data;
  },

  async delete(id: number) {
    const response = await httpClient.delete(`/sertifikat/${id}`);
    return response.data;
  },
};

export function getAllStudents() {
  throw new Error("Function not implemented.");
}
