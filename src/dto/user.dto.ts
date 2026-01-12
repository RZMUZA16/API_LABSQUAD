export interface userDto {
  nama: string;
  nim: number;
  email: string;
  password: string;
}

export interface CreateUserDto {
  nama: string;
  nim: number;
  email: string;
  password: string;
}

export interface UpdateUserDto {
  nama?: string;
  nim?: number;
  email?: string;
  password?: string;
}
