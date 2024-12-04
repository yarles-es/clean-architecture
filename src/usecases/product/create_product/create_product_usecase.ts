import { BadRequestError } from '../../../common/errors/bad_request_error';
import { ConflictError } from '../../../common/errors/conflict_error';
import { InternalServerError } from '../../../common/errors/internal_server_error';
import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { DomainValidationError } from '../../../domain/errors/domain_validation_error';
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

    try {
      const product = Product.create(name, price);

      await this.productGateway.saveProduct(product);

      return ProductPresenter.toCreateProductOutputDto(product);
    } catch (error) {
      if (error instanceof DomainValidationError) throw new BadRequestError(error.message);
      throw new InternalServerError('An error occurred while creating the product');
    }
  }
}
