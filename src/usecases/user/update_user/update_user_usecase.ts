import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { UpdateUserInputDto, UpdateUserOutputDto } from '../../../models/user/update_user_dto';
import { Usecase } from '../../usecase';

export class UpdateUserUsecase implements Usecase<UpdateUserInputDto, UpdateUserOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): UpdateUserUsecase {
    return new UpdateUserUsecase(userGateway);
  }

  public async execute({ name, email, role }: UpdateUserInputDto): Promise<UpdateUserOutputDto> {
    await this.userGateway.updateUser({ name, email, role });
  }
}
