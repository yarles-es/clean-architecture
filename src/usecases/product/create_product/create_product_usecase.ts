import { ConflictError } from '../../../common/errors/conflict_error';
import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { Product } from '../../../domain/product/entity/product';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';

export type CreateproductInputDto = {
  name: string;
  price: number;
};

export type CreateproductOutputDto = {
  id: number;
};

export class CreateProductUsecase implements Usecase<CreateproductInputDto, CreateproductOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway) {
    return new CreateProductUsecase(productGateway);
  }

  public async execute({ name, price }: CreateproductInputDto): Promise<CreateproductOutputDto> {
    const existingProduct = await this.productGateway.getProductByName(name);

    if (existingProduct) throw new ConflictError('Product already exists');

    const product = Product.create(name, price);

    await this.productGateway.saveProduct(product);

    return ProductPresenter.toCreateProductOutputDto(product);
  }
}
