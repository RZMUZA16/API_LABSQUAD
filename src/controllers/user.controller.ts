import type { Context } from "hono";
import * as userService from "../services/user.services";
import { successResponse, errorResponse } from "../utils/response";
import { tr } from "@faker-js/faker";

export const usergetAll = async (c: Context) => {
  try {
    const users = await userService.getAllusers();
    return successResponse(c, "Daftar mahasiswa berhasil diambil", users);
  } catch (error) {
    return errorResponse(c, "Gagal mengambil daftar mahasiswa", error);
  }
};
export const usergetdariId = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID mahasiswa tidak valid", null, 400);
    }
    const user = await userService.getuserById(id);
    if (!user) {
      return errorResponse(c, "Mahasiswa tidak ditemukan", null, 404);
    }
    return successResponse(c, "Detail mahasiswa berhasil diambil", user);
  } catch (error) {
    return errorResponse(c, "Gagal mengambil detail mahasiswa", error);
  }
};
export const usercreate = async (c: Context) => {
  try {
    const body = await c.req.json();
    const newActivity = await userService.createuser(body);
    return successResponse(c, "Aktivitas berhasil dibuat", newActivity, 201);
  } catch (error) {
    return errorResponse(c, "Gagal membuat aktivitas", error);
  }
};
export const userupdate = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    const body = await c.req.json();
    const newActivity = await userService.updateuser(id, body);
    return successResponse(c, "Mahasiswa berhasil diupdate", newActivity, 201);
  } catch (error) {
    return errorResponse(c, "Gagal mengupdate aktivitas", error);
  }
};

export const userdelete = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    const newActivity = await userService.deleteuser(id);
    return successResponse(c, "Mahasiswa berhasil dihapus", newActivity, 201);
  } catch (error) {
    return errorResponse(c, "Gagal menghapus aktivitas", error);
  }
};
