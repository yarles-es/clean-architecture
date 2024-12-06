export const roleTags = { ADMIN: 'ADMIN', USER: 'USER' } as const;
export type Role = (typeof roleTags)[keyof typeof roleTags];

export type GetUserOutputDto = {
  id: number;
  uuid: string;
  name: string;
  email: string;
  role: Role;
};

export type GetAllUserInputDto = void;

export type GetAllusersOutputDto = GetUserOutputDto[];

export type GetUserByIdInputDto = {
  id: number;
};

export type UpdateUserInputDto = Partial<GetUserOutputDto & { password: string }>;
