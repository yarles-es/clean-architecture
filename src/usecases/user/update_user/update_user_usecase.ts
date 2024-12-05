import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { UpdateUserInputDto } from '../../../models/user_dtos';
import { Usecase } from '../../usecase';

export type UpdateUserOutputDto = void;

export class UpdateUserUsecase implements Usecase<UpdateUserInputDto, UpdateUserOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): UpdateUserUsecase {
    return new UpdateUserUsecase(userGateway);
  }

  public async execute({ name, email, role }: UpdateUserInputDto): Promise<UpdateUserOutputDto> {
    await this.userGateway.updateUser({ name, email, role });
  }
}
