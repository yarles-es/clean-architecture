import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { GetProductByIdInputDto, GetProductOutputDto } from '../../../models/product/get_product_dto';
import { Usecase } from '../../usecase';

export class GetProductByIdUseCase implements Usecase<GetProductByIdInputDto, GetProductOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): GetProductByIdUseCase {
    return new GetProductByIdUseCase(productGateway);
  }

  public async execute({ id }: GetProductByIdInputDto): Promise<GetProductOutputDto> {
    const product = await this.productGateway.getProductById(id);

    return ProductPresenter.toGetProductOutputDto(product);
  }
}
