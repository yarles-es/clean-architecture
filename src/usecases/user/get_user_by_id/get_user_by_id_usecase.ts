import { UserPresenter } from '../../../common/presenters/user_presenter';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { GetUserByIdInputDto, GetUserOutputDto } from '../../../models/user/get_user_dto';
import { Usecase } from '../../usecase';

export class GetUserByIdlUsecase implements Usecase<GetUserByIdInputDto, GetUserOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): GetUserByIdlUsecase {
    return new GetUserByIdlUsecase(userGateway);
  }

  public async execute({ id }: GetUserByIdInputDto): Promise<GetUserOutputDto> {
    const user = await this.userGateway.getUserById(id);

    return UserPresenter.toGetUserOutputDto(user);
  }
}
