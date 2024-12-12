import { Product } from '../../domain/product/entity/product';
import { CreateproductOutputDto } from '../../models/product/create_product_dto';
import { GetProductOutputDto } from '../../models/product/get_product_dto';

import { BadRequestError } from '../errors/bad_request_error';

export class ProductPresenter {
  public static toCreateProductOutputDto(product: Product): CreateproductOutputDto {
    if (!product.id) throw new BadRequestError('Product ID must be provided');

    return {
      id: product.id,
    };
  }

  public static toGetProductOutputDto(product: Product): GetProductOutputDto {
    if (!product.id) throw new BadRequestError('Product ID must be provided');

    return {
      id: product.id,
      uuid: product.uuid,
      name: product.name,
      price: product.price,
    };
  }

  public static toGetProductsOutputDto(products: Product[]): GetProductOutputDto[] {
    return products.map((product) => ProductPresenter.toGetProductOutputDto(product));
  }
}
