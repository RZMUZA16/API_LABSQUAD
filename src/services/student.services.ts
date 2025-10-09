import { fetchJson } from "../utils/httpClient";

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:4000/api";

/**
 * Ambil semua mahasiswa dari service user
 */
export const getAllStudents = async () => {
  const url = `${USER_SERVICE_URL}/students`;
  return await fetchJson(url);
};

/**
 * Ambil mahasiswa berdasarkan ID dari service user
 */
export const getStudentById = async (id: string) => {
  const url = `${USER_SERVICE_URL}/students/${id}`;
  return await fetchJson(url);
};
