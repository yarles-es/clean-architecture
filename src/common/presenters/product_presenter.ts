import { Product } from '../../domain/product/entity/product';
import { CreateproductOutputDto } from '../../usecases/product/create_product/create_product_usecase';

export class ProductPresenter {
  public static toCreateProductOutputDto(product: Product): CreateproductOutputDto {
    return {
      id: product.id,
    };
  }

  public static toGetProductOutputDto(product: Product) {
    return {
      id: product.id,
      uuid: product.uuid,
      name: product.name,
      price: product.price,
    };
  }
}
