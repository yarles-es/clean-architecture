import { Product } from '../../domain/product/entity/product';

type ToPrismaProductOutput = {
  uuid: string;
  name: string;
  price: number;
};

export class ProductMapper {
  static toPrisma(product: Product): ToPrismaProductOutput {
    return {
      uuid: product.uuid,
      name: product.name,
      price: product.price,
    };
  }

  static updatePrisma(product: Partial<Product>) {
    const dataToUpdate = {
      ...(product.name && { name: product.name }),
      ...(product.price && { price: product.price }),
    };

    return dataToUpdate;
  }
}
