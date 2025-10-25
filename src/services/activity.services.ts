import * as activityRepository from '../repository/activity.repository';

export const getAllActivities = async () => {
  return await activityRepository.findAllActivity();
};

export const getActivityById = async (id: number) => {
  return await activityRepository.findActivityById(id);
};   
export const createActivity = async (data: any) => { 
  return await activityRepository.createActivity(data);
};  
export const updateActivity = async (id: number, data: any) => {
  return await activityRepository.updateActivity(id, data);
};
export const deleteActivity = async (id: number) => {
  return await activityRepository.deleteActivity(id);
};