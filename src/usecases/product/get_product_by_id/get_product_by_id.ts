import { BadRequestError } from '../../../common/errors/bad_request_error';
import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { Usecase } from '../../usecase';

export type GetproductByIdInputDto = {
  id: number;
};

export type GetproductByIdOutputDto = {
  id: number;
  uuid: string;
  name: string;
  price: number;
};

export class GetProductByIdUseCase implements Usecase<GetproductByIdInputDto, GetproductByIdOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway) {
    return new GetProductByIdUseCase(productGateway);
  }

  public async execute({ id }: GetproductByIdInputDto): Promise<GetproductByIdOutputDto> {
    const product = await this.productGateway.getProductById(id);

    if (!product) throw new BadRequestError('Product not found');

    return ProductPresenter.toGetProductOutputDto(product);
  }
}
