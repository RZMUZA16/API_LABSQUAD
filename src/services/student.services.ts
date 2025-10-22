import { httpClient } from "../utils/httpClient";

export const studentService = {
  async getAllStudents() {
    const response = await httpClient.get("/students");
    return response.data;
  },

  async getStudentById(id: string) {
    const response = await httpClient.get(`/students/${id}`);
    return response.data;
  },

  async create(data: any) {
    const response = await httpClient.post("/students", data);
    return response.data;
  },

  async update(id: string, data: any) {
    const response = await httpClient.put(`/students/${id}`, data);
    return response.data;
  },

  async delete(id: string) {
    const response = await httpClient.delete(`/students/${id}`);
    return response.data;
  },
};
