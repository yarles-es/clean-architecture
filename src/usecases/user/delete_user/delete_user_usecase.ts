import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { DeleteUserInputDto, DeleteUserOutputDto } from '../../../dtos/user/delete_user_dto';
import { Usecase } from '../../usecase';

export class DeleteUserUsecase implements Usecase<DeleteUserInputDto, DeleteUserOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): DeleteUserUsecase {
    return new DeleteUserUsecase(userGateway);
  }

  public async execute({ id }: DeleteUserInputDto): Promise<DeleteUserOutputDto> {
    await this.userGateway.deleteUser(id);
  }
}
