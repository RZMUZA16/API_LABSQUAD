import type { Context } from "hono";
import * as poinService from "../services/poin.services";
import { successResponse, errorResponse } from "../utils/response";


export const getAllPoin = async (c: Context) => {
  try {
    const points = await poinService.getAllPoin();
    return successResponse(c, "Daftar poin berhasil diambil", points);
  } catch (error) {
    return errorResponse(c, "Gagal mengambil daftar poin", error);
  }
};


export const getPoinById = async (c: Context) => {2
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID poin tidak valid", null, 400);
    }
    const point = await poinService.getPoinById(id);
    if (!point) {
      return errorResponse(c, "Poin tidak ditemukan", null, 404);
    }
    return successResponse(c, "Detail poin berhasil diambil", point);
  } catch (error) {
    return errorResponse(c, "Gagal mengambil detail poin", error);
  }
};

export const createPoin = async (c: Context) => {
  try {
    const body = await c.req.json();

    const { sertifikatId, activityId, poin } = body;

    if (!sertifikatId || !activityId) {
      return errorResponse(
        c,
        "sertifikatId dan activityId wajib diisi",
        null,
        400
      );
    }

    const newPoint = await poinService.createPoin({
      sertifikatId,
      activityId,
      poin,
    });

    return successResponse(c, "Poin berhasil dibuat", newPoint, 201);
  } catch (error) {
    return errorResponse(c, "Gagal membuat poin", error);
  }
};


export const updatePoin = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID poin tidak valid", null, 400);
    }
    const body = await c.req.json();
    const updated = await poinService.updatePoin(id, body);
    if (!updated) {
      return errorResponse(c, "Poin tidak ditemukan", null, 404);
    }
    return successResponse(c, "Poin berhasil diperbarui", updated);
  } catch (error) {
    return errorResponse(c, "Gagal memperbarui poin", error);
  }
};

export const deletePoin = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID poin tidak valid", null, 400);
    }
    const deleted = await poinService.deletePoin(id);
    if (!deleted) {
      return errorResponse(c, "Poin tidak ditemukan", null, 404);
    }
    return successResponse(c, "Poin berhasil dihapus", deleted);
  } catch (error) {
    return errorResponse(c, "Gagal menghapus poin", error);
  }
};