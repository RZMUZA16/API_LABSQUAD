type Activity = {
  id: number;
  name: string;
  date: string;
  [key: string]: any;
};

let activities: Activity[] = [];
let nextId = 1;

export const findAll = async (): Promise<Activity[]> => {
  return activities;
};

export const findById = async (id: number): Promise<Activity | undefined> => {
  return activities.find(activity => activity.id === id);
};

export const create = async (data: Omit<Activity, "id">): Promise<Activity> => {
  // Validasi minimal
  if (!data.name || !data.date) {
    throw new Error("Data aktivitas tidak lengkap");
  }
  const newActivity: Activity = { id: nextId++, ...data } as Activity;
  activities.push(newActivity);
  return newActivity;
};

export const update = async (id: number, data: Partial<Activity>): Promise<Activity | undefined> => {
  const index = activities.findIndex(activity => activity.id === id);
  if (index === -1) return undefined;
  activities[index] = { ...activities[index], ...data } as Activity;
  return activities[index];
};

export const remove = async (id: number): Promise<Activity | undefined> => {
  const index = activities.findIndex(activity => activity.id === id);
  if (index === -1) return undefined;
  const [deleted] = activities.splice(index, 1);
  return deleted;
};import * as activityRepository from "../repository/activity.repository";

export const getAllActivities = async () => {
  return await activityRepository.findAllActivity();
};

export const getActivityById = async (id: number) => {
  return await activityRepository.findActivityById(id);
};

export const createActivity = async (data: any) => {
  // Validasi data (opsional)
  if (!data.name || !data.date) {
    throw new Error("Data aktivitas tidak lengkap");
  }
  return await activityRepository.createActivity(data);
};

export const updateActivity = async (id: number, data: any) => {
  return await activityRepository.updateActivity(id, data);
};

export const deleteActivity = async (id: number) => {
  return await activityRepository.deleteActivity(id);
};