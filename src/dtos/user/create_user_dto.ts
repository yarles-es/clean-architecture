export const roleTags = { ADMIN: 'ADMIN', USER: 'USER' } as const;
export type Role = (typeof roleTags)[keyof typeof roleTags];

export type CreateUserInputDto = {
  email: string;
  password: string;
  name: string;
  role?: Role;
};

export type CreateUserOutputDto = {
  id: number;
};
