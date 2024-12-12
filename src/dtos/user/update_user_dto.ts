import { GetUserOutputDto } from './get_user_dto';

export type UpdateUserInputDto = Partial<GetUserOutputDto & { password: string }>;

export type UpdateUserOutputDto = void;
