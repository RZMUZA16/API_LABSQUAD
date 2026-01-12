import * as userRepository from "../repository/user.repository.js";
import { user_role } from "@prisma/client";

export const getAllusers = async () => {
  return await userRepository.findAll();
};
export const getuserById = async (id: number) => {
  return await userRepository.findById(id);
};

export const createuser = async (data: any) => {
  return await userRepository.create(data);
};

export const updateuser = async (id: number, data: any) => {
  return await userRepository.update(id, data);
};

export const deleteuser = async (id: number) => {
  return await userRepository.remove(id);
};
export const approveSertifikatForUser = async (userId: number, sertifikatUserId: number, user_role: user_role) => {
  if (user_role !== 'KAPLAB') {
    throw new Error('Only ADMIN can approve sertifikat');
  }
  if (!userId || !sertifikatUserId) {
    throw new Error('userId and sertifikatUserId are required');
  }
  return await userRepository.approveSertifikat(userId, sertifikatUserId);


}