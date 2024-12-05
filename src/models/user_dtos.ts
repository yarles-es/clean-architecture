export type GetUserOutputDto = {
  id: number;
  uuid: string;
  name: string;
  email: string;
  role: 'admin' | 'client';
};

export type GetAllUserInputDto = void;

export type GetAllusersOutputDto = GetUserOutputDto[];

export type GetUserByIdInputDto = {
  id: number;
};

export type UpdateUserInputDto = Partial<GetUserOutputDto & { password: string }>;
