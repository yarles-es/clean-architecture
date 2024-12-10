import { UserPresenter } from '../../../common/presenters/user_presenter';
import { User } from '../../../domain/user/entity/user';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { CreateUserInputDto, CreateUserOutputDto, roleTags } from '../../../models/user/create_user_dto';
import { EncryptorService } from '../../../services/encryptor_service';

import { Usecase } from '../../usecase';

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
