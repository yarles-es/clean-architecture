import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { Usecase } from '../../usecase';

export type DeleteUserInputDto = {
  id: number;
};

export type DeleteUserOutputDto = void;

export class DeleteUserUsecase implements Usecase<DeleteUserInputDto, DeleteUserOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): DeleteUserUsecase {
    return new DeleteUserUsecase(userGateway);
  }

  public async execute({ id }: DeleteUserInputDto): Promise<DeleteUserOutputDto> {
    await this.userGateway.deleteUser(id);
  }
}
