import type { Context } from "hono";
import * as inputSertifikatService from "../services/inputSertifikat.services";
import { successResponse, errorResponse } from "../utils/response";
import { verifySertifikatUser } from "../repository/inputSertifikat.repository";
import type { Request, Response } from "express";

export const getAllInputSertifikats = async (c: Context) => {
  try {
    const inputSertifikats =
      await inputSertifikatService.getAllInputSertifikats();
    return successResponse(
      c,
      "Daftar input sertifikat berhasil diambil",
      inputSertifikats
    );
  } catch (error) {
    return errorResponse(c, "Gagal mengambil daftar input sertifikat", error);
  }
};

export const getInputSertifikatById = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID input sertifikat tidak valid", null, 400);
    }
    const inputSertifikat =
      await inputSertifikatService.getInputSertifikatById(id);
    if (!inputSertifikat) {
      return errorResponse(c, "Input sertifikat tidak ditemukan", null, 404);
    }
    return successResponse(
      c,
      "Detail input sertifikat berhasil diambil",
      inputSertifikat
    );
  } catch (error) {
    return errorResponse(c, "Gagal mengambil detail input sertifikat", error);
  }
};

export const createInputSertifikat = async (c: Context) => {
  try {
    const body = await c.req.json();

    if (!body) {
      throw new Error("BODY_REQUEST_KOSONG");
    }

    const newInputSertifikat =
      await inputSertifikatService.createInputSertifikat(body);

    return successResponse(
      c,
      "Input sertifikat berhasil dibuat",
      newInputSertifikat,
      201
    );
  } catch (error: any) {
    console.error("❌ ERROR DI CONTROLLER createInputSertifikat");
    console.error("➡️ MESSAGE:", error.message);
    console.error("➡️ STACK:", error.stack);

    return errorResponse(c, "Gagal membuat input sertifikat (controller)", {
      location: "createInputSertifikat controller",
      message: error.message,
    });
  }
};

export const updateInputSertifikat = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID input sertifikat tidak valid", null, 400);
    }
    const body = await c.req.json();
    const updated = await inputSertifikatService.updateInputSertifikat(
      id,
      body
    );
    if (!updated) {
      return errorResponse(c, "Input sertifikat tidak ditemukan", null, 404);
    }
    return successResponse(c, "Input sertifikat berhasil diperbarui", updated);
  } catch (error) {
    return errorResponse(c, "Gagal memperbarui input sertifikat", error);
  }
};

export const deleteInputSertifikat = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID input sertifikat tidak valid", null, 400);
    }
    const deleted = await inputSertifikatService.deleteInputSertifikat(id);
    if (!deleted) {
      return errorResponse(c, "Input sertifikat tidak ditemukan", null, 404);
    }
    return successResponse(c, "Input sertifikat berhasil dihapus", deleted);
  } catch (error) {
    return errorResponse(c, "Gagal menghapus input sertifikat", error);
  }
};
export const verifySertifikat = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { acc } = req.body;

  if (typeof acc !== "boolean") {
    return res.status(400).json({
      message: "Field acc harus boolean",
    });
  }

  const result = await verifySertifikatUser(Number(id), acc);

  return res.json({
    success: true,
    data: result,
  });
};

export default inputSertifikatService;
