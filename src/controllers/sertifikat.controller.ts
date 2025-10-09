import type { Context } from "hono";
import { successResponse, errorResponse } from "../utils/response";
import * as sertifikatService from "../services/sertifikat.service";

// 📘 Get semua sertifikat
export const getAllSertifikat = async (c: Context) => {
  try {
    const sertifikats = await sertifikatService.getAllSertifikat();
    return successResponse(c, "Daftar sertifikat berhasil diambil", sertifikats);
  } catch (error) {
    return errorResponse(c, "Terjadi masalah pada sertifikat", error);
  }
};

// 📘 Get sertifikat berdasarkan ID
export const getSertifikatById = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const sertifikat = await sertifikatService.getSertifikatById(id);

    if (!sertifikat) {
      return errorResponse(c, "Sertifikat tidak ditemukan", null, 404);
    }

    return successResponse(c, "Detail sertifikat berhasil diambil", sertifikat);
  } catch (error) {
    return errorResponse(c, "Gagal mengambil detail sertifikat", error);
  }
};

// 📘 Upload sertifikat (misal file atau data baru)
export const uploadSertifikat = async (c: Context) => {
  try {
    const body = await c.req.json();
    const newSertifikat = await sertifikatService.uploadSertifikat(body);

    return successResponse(c, "Sertifikat berhasil diunggah", newSertifikat, 201);
  } catch (error) {
    return errorResponse(c, "Gagal mengunggah sertifikat", error);
  }
};

// 📘 Update sertifikat (data umum)
export const updateSertifikat = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();

    const updated = await sertifikatService.updateSertifikat(id, body);

    if (!updated) {
      return errorResponse(c, "Sertifikat tidak ditemukan", null, 404);
    }

    return successResponse(c, "Sertifikat berhasil diperbarui", updated);
  } catch (error) {
    return errorResponse(c, "Gagal memperbarui sertifikat", error);
  }
};

// 📘 Update status sertifikat (misal disetujui/dibatalkan)
export const updateSertifikatStatus = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json(); // { status: "approved" | "rejected" }

    const updatedStatus = await sertifikatService.updateSertifikatStatus(id, body.status);

    if (!updatedStatus) {
      return errorResponse(c, "Sertifikat tidak ditemukan atau status tidak valid", null, 404);
    }

    return successResponse(c, "Status sertifikat berhasil diperbarui", updatedStatus);
  } catch (error) {
    return errorResponse(c, "Gagal memperbarui status sertifikat", error);
  }
};

// 📘 Hapus sertifikat
export const deleteSertifikat = async (c: Context) => {
  try {
    const id = c.req.param("id");
    const deleted = await sertifikatService.deleteSertifikat(id);

    if (!deleted) {
      return errorResponse(c, "Sertifikat tidak ditemukan", null, 404);
    }

    return successResponse(c, "Sertifikat berhasil dihapus", deleted);
  } catch (error) {
    return errorResponse(c, "Gagal menghapus sertifikat", error);
  }
};
