import { UserPresenter } from '../../../common/presenters/user_presenter';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { GetAllUserInputDto, GetAllusersOutputDto } from '../../../dtos/user/get_user_dto';
import { Usecase } from '../../usecase';

export class GetAllUserUsecase implements Usecase<GetAllUserInputDto, GetAllusersOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): GetAllUserUsecase {
    return new GetAllUserUsecase(userGateway);
  }

  public async execute(): Promise<GetAllusersOutputDto> {
    const users = await this.userGateway.getAllUsers();

    return UserPresenter.toGetAllUsersOutputDto(users);
  }
}
