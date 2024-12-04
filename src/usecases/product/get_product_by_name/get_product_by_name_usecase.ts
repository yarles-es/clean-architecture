import { BadRequestError } from '../../../common/errors/bad_request_error';
import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { Usecase } from '../../usecase';

export type GetproductByNameInputDto = {
  name: string;
};

export type GetproductByNameOutputDto = {
  id: number;
  uuid: string;
  name: string;
  price: number;
};

export class GetProductByNameUseCase implements Usecase<GetproductByNameInputDto, GetproductByNameOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway) {
    return new GetProductByNameUseCase(productGateway);
  }

  public async execute({ name }: GetproductByNameInputDto): Promise<GetproductByNameOutputDto> {
    const product = await this.productGateway.getProductByName(name);

    if (!product) throw new BadRequestError('Product not found');

    return ProductPresenter.toGetProductOutputDto(product);
  }
}
