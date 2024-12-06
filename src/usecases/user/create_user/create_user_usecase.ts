import { UserPresenter } from '../../../common/presenters/user_presenter';
import { User } from '../../../domain/user/entity/user';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { Role, roleTags } from '../../../models/user_dtos';

import { Usecase } from '../../usecase';

export type CreateUserInputDto = {
  email: string;
  password: string;
  name: string;
  role?: Role;
};

export type CreateUserOutputDto = {
  id: number;
};

export class CreateUserUsecase implements Usecase<CreateUserInputDto, CreateUserOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): CreateUserUsecase {
    return new CreateUserUsecase(userGateway);
  }

  public async execute({
    email,
    password,
    name,
    role = roleTags.USER,
  }: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const user = User.createNew(email, password, name, role);

    const savedUser = await this.userGateway.saveUser(user);

    return UserPresenter.toCreateUserOutputDto(savedUser);
  }
}
