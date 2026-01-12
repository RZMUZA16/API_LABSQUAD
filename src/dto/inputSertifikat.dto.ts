
export interface CreateSertifikatUserDto {
  userId: number;
  sertifikatId: number;
  activityId: number;
  file_path: string;
}

export interface UpdateSertifikatUserDto {
  userId?: number;
  sertifikatId?: number;
  activityId?: number;
  file_path?: string;
}