import { UserPresenter } from '../../../common/presenters/user_presenter';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { GetUserOutputDto } from '../../../models/user_dtos';
import { Usecase } from '../../usecase';

export type GetUserByEmailInputDto = {
  email: string;
};

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
