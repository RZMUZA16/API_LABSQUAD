import prisma from "../utils/prisma";
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
  const newActivity: Activity = { id: nextId++, ...data };
  activities.push(newActivity);
  return newActivity;
};

export const update = async (id: number, data: Partial<Activity>): Promise<Activity | undefined> => {
  const index = activities.findIndex(activity => activity.id === id);
  if (index === -1) return undefined;
  activities[index] = { ...activities[index], ...data };
  return activities[index];
};

export const remove = async (id: number): Promise<Activity | undefined> => {
  const index = activities.findIndex(activity => activity.id === id);
  if (index === -1) return undefined;
  const [deleted] = activities.splice(index, 1);
  return deleted;
};