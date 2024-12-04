import { Product } from '../../domain/product/entity/product';
import { CreateproductOutputDto } from '../../usecases/product/create_product/create_product_usecase';

export class ProductPresenter {
  public static toCreateProductOutputDto(product: Product): CreateproductOutputDto {
    return {
      id: product.id,
    };
  }
}
