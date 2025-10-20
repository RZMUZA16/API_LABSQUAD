import * as activityRepository from "../repository/activity.repository";

export const getAllActivities = async () => {
  return await activityRepository.findAll();
};

export const getActivityById = async (id: number) => {
  return await activityRepository.findById(id);
};

export const createActivity = async (data: any) => {
  // Validasi data (opsional)
  if (!data.name || !data.date) {
    throw new Error("Data aktivitas tidak lengkap");
  }
  return await activityRepository.create(data);
};

export const updateActivity = async (id: number, data: any) => {
  return await activityRepository.update(id, data);
};

export const deleteActivity = async (id: number) => {
  return await activityRepository.remove(id);
};