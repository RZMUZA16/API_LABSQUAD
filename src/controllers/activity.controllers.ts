import type { Context } from "hono";
import * as activityService from "../services/activity.services";
import { successResponse, errorResponse } from "../utils/response";

// Get all activities
export const AktivitasgetAll = async (c: Context) => {
  try {
    const activities = await activityService.getAllActivities();
    return successResponse(c, "Daftar aktivitas berhasil diambil", activities);
  } catch (error) {
    return errorResponse(c, "Gagal mengambil daftar aktivitas", error);
  }
};

// Get activity by ID
export const aktivitasgetdariId = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID aktivitas tidak valid", null, 400);
    }
    const activity = await activityService.getActivityById(id);
    if (!activity) {
      return errorResponse(c, "Aktivitas tidak ditemukan", null, 404);
    }
    return successResponse(c, "Detail aktivitas berhasil diambil", activity);
  } catch (error) {
    return errorResponse(c, "Gagal mengambil detail aktivitas", error);
  }
};

// Create new activity
export const buataktivitas = async (c: Context) => {
  try {
    const body = await c.req.json();
    const newActivity = await activityService.createActivity(body);
    return successResponse(c, "Aktivitas berhasil dibuat", newActivity, 201);
  } catch (error) {
    return errorResponse(c, "Gagal membuat aktivitas", error);
  }
};

// Update activity
export const updateaktivitas = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID aktivitas tidak valid", null, 400);
    }
    const body = await c.req.json();
    const updated = await activityService.updateActivity(id, body);
    if (!updated) {
      return errorResponse(c, "Aktivitas tidak ditemukan", null, 404);
    }
    return successResponse(c, "Aktivitas berhasil diperbarui", updated);
  } catch (error) {
    return errorResponse(c, "Gagal memperbarui aktivitas", error);
  }
};

// Delete activity
export const deleteaktivias = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    const id = Number(idParam);
    if (isNaN(id)) {
      return errorResponse(c, "ID aktivitas tidak valid", null, 400);
    }
    const deleted = await activityService.deleteActivity(id);
    if (!deleted) {
      return errorResponse(c, "Aktivitas tidak ditemukan", null, 404);
    }
    return successResponse(c, "Aktivitas berhasil dihapus", deleted);
  } catch (error) {
    return errorResponse(c, "Gagal menghapus aktivitas", error);
  }
};