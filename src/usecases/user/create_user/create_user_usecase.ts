import { UserPresenter } from '../../../common/presenters/user_presenter';
import { User } from '../../../domain/user/entity/user';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { Role, roleTags } from '../../../models/user_dtos';
import { EncryptorService } from '../../../services/encryptor_service';

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
  constructor(
    private readonly userGateway: UserGateway,
    private readonly encryptorService: EncryptorService,
  ) {}

  public static create(userGateway: UserGateway, encryptorService: EncryptorService): CreateUserUsecase {
    return new CreateUserUsecase(userGateway, encryptorService);
  }

  public async execute({
    email,
    password,
    name,
    role = roleTags.USER,
  }: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const encryptedPassword = await this.encryptorService.encrypt(password);

    const user = User.createNew(email, encryptedPassword, name, role);

    const savedUser = await this.userGateway.saveUser(user);

    return UserPresenter.toCreateUserOutputDto(savedUser);
  }
}
