import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { GetAllProductsInputDto, GetAllProductsOutputDto } from '../../../models/product_dtos';
import { Usecase } from '../../usecase';

export class GetAllProductsUseCase implements Usecase<GetAllProductsInputDto, GetAllProductsOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): GetAllProductsUseCase {
    return new GetAllProductsUseCase(productGateway);
  }

  public async execute(): Promise<GetAllProductsOutputDto> {
    const products = await this.productGateway.getAllProducts();

    return ProductPresenter.toGetProductsOutputDto(products);
  }
}
