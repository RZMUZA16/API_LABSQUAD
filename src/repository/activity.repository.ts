import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type activity = {
  id: number;
  nama_activity: string;
  deskripsi?: string | null;
  tanggal_activity: Date;
  createdAt: Date;
  updatedAt: Date;
};

let activities: activity[] = [];
let nextId = 1;

export const findAllActivity = async (): Promise<activity[]> => {
  return activities;
};

export const findActivityById = async (id: number): Promise<activity | undefined> => {
  const aktivitas = activities.find(activity => activity.id === id);
  return aktivitas;
};

export const createActivity = async (data: Omit<activity, "id" | "createdAt" | "updatedAt">): Promise<activity> => {
  const newActivity: activity = {
    id: nextId++,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...data,
  };
  activities.push(newActivity);
  return newActivity;
};

export const updateActivity = async (id: number, data: Partial<activity>): Promise<activity | undefined> => {
  const index = activities.findIndex(activity => activity.id === id);
  if (index === -1) return undefined;
  activities[index] = { ...activities[index], ...data, updatedAt: new Date() } as activity;
  return activities[index];
};

export const deleteActivity = async (id: number): Promise<activity | undefined> => {
  const index = activities.findIndex(activity => activity.id === id);
  if (index === -1) return undefined; 
  const [deleted] = activities.splice(index, 1);
  return deleted;
};

export default prisma;