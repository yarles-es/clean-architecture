import { BadRequestError } from '../../../common/errors/bad_request_error';
import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { GetProductByIdInputDto, GetProductOutputDto } from '../../../models/product_dtos';
import { Usecase } from '../../usecase';

export class GetProductByIdUseCase implements Usecase<GetProductByIdInputDto, GetProductOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): GetProductByIdUseCase {
    return new GetProductByIdUseCase(productGateway);
  }

  public async execute({ id }: GetProductByIdInputDto): Promise<GetProductOutputDto> {
    const product = await this.productGateway.getProductById(id);

    if (!product) throw new BadRequestError('Product not found');

    return ProductPresenter.toGetProductOutputDto(product);
  }
}
