import { ConflictError } from '../../../common/errors/conflict_error';
import { ProductPresenter } from '../../../common/presenters/product_presenter';
import { Product } from '../../../domain/product/entity/product';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { CreateproductInputDto, CreateproductOutputDto } from '../../../models/product/create_product_dto';
import { Usecase } from '../../usecase';

export class CreateProductUsecase implements Usecase<CreateproductInputDto, CreateproductOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): CreateProductUsecase {
    return new CreateProductUsecase(productGateway);
  }

  public async execute({ name, price }: CreateproductInputDto): Promise<CreateproductOutputDto> {
    const existingProduct = await this.productGateway.getProductByName(name);

    if (existingProduct) throw new ConflictError('Product already exists');

    const product = Product.createNew(name, price);

    const savedProduct = await this.productGateway.saveProduct(product);

    return ProductPresenter.toCreateProductOutputDto(savedProduct);
  }
}
