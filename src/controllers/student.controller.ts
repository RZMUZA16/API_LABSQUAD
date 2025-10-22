import type { Context } from "hono";
import { successResponse, errorResponse } from "../utils/response";
import { studentService } from "../services/student.services";

export const getAllStudents = async (c: Context) => {
  try {
    const students = await studentService.getAllStudents();
    return successResponse(c, "Berhasil mengambil data mahasiswa", students);
  } catch (error: any) {
    return errorResponse(c, "Gagal mengambil data mahasiswa", error.message);
  }
};

export const getStudentById = async (c: Context) => {
  try {
    const id = c.req.param("id");
    if (!id) {
      return errorResponse(c, "Parameter ID mahasiswa tidak ditemukan", 400);
    }

    const student = await studentService.getStudentById(id);
    if (!student) {
      return errorResponse(c, "Mahasiswa tidak ditemukan", 404);
    }

    return successResponse(c, "Berhasil mengambil detail mahasiswa", student);
  } catch (error: any) {
    return errorResponse(c, "Terjadi kesalahan pada server", error.message);
  }
};
