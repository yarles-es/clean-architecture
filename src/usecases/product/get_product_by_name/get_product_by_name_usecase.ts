import { BadRequestError } from '../../../common/errors/bad_request_error';
import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { GetProductByNameInputDto, GetProductOutputDto } from '../../../models/product_dtos';
import { Usecase } from '../../usecase';

export class GetProductByNameUseCase implements Usecase<GetProductByNameInputDto, GetProductOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): GetProductByNameUseCase {
    return new GetProductByNameUseCase(productGateway);
  }

  public async execute({ name }: GetProductByNameInputDto): Promise<GetProductOutputDto> {
    const product = await this.productGateway.getProductByName(name);

    if (!product) throw new BadRequestError('Product not found');

    return ProductPresenter.toGetProductOutputDto(product);
  }
}
