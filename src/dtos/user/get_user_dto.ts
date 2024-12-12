import { Role } from './create_user_dto';

export type GetUserOutputDto = {
  id: number;
  uuid: string;
  name: string;
  email: string;
  role: Role;
};

export type GetUserByEmailInputDto = {
  email: string;
};

export type GetAllUserInputDto = void;

export type GetAllusersOutputDto = GetUserOutputDto[];

export type GetUserByIdInputDto = {
  id: number;
};
