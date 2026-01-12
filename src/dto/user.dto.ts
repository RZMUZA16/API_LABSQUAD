export interface userDto {
  nama: string;
  nim: number;
  email: string;
  password: string;
}
// createUser.dto.ts
export interface CreateUserDto {
  nama: string;
  nim: number;
  email: string;
  password: string;
}
// updateUser.dto.ts
export interface UpdateUserDto {
  nama?: string;
  nim?: number;
  email?: string;
  password?: string;
}
