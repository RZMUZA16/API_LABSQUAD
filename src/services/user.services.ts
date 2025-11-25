import * as userRepository from "../repository/user.repository.js";

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
