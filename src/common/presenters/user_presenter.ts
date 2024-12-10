import { User } from '../../domain/user/entity/user';
import { CreateUserOutputDto } from '../../models/user/create_user_dto';
import { GetAllusersOutputDto, GetUserOutputDto } from '../../models/user/get_user_dto';

import { BadRequestError } from '../errors/bad_request_error';

export class UserPresenter {
  public static toCreateUserOutputDto(user: User): CreateUserOutputDto {
    if (!user.id) throw new BadRequestError('User ID must be provided');

    return {
      id: user.id,
    };
  }

  public static toGetUserOutputDto(user: User): GetUserOutputDto {
    if (!user.id) throw new BadRequestError('User ID must be provided');

    return {
      id: user.id,
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  }

  public static toGetAllUsersOutputDto(users: User[]): GetAllusersOutputDto {
    return users.map((user) => UserPresenter.toGetUserOutputDto(user));
  }
}
