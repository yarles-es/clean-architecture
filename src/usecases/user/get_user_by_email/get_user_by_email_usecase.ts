import { UserPresenter } from '../../../common/presenters/user_presenter';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { GetUserByEmailInputDto, GetUserOutputDto } from '../../../models/user/get_user_dto';
import { Usecase } from '../../usecase';

export class GetUserByEmailUsecase implements Usecase<GetUserByEmailInputDto, GetUserOutputDto> {
  constructor(private readonly userGateway: UserGateway) {}

  public static create(userGateway: UserGateway): GetUserByEmailUsecase {
    return new GetUserByEmailUsecase(userGateway);
  }

  public async execute({ email }: GetUserByEmailInputDto): Promise<GetUserOutputDto> {
    const user = await this.userGateway.getUserByEmail(email);

    return UserPresenter.toGetUserOutputDto(user);
  }
}
