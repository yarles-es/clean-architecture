import { PrismaClient } from '@prisma/client';
import { NotFoundError } from '../../../common/errors/not_found_error';
import { Product } from '../../../domain/product/entity/product';
import { ProductGateway } from '../../../domain/product/gateway/product_gateway';

export class ProductRepositoryPrisma implements ProductGateway {
  private constructor(private readonly prismaClient: PrismaClient) {}

  public static create(prismaClient: PrismaClient): ProductRepositoryPrisma {
    return new ProductRepositoryPrisma(prismaClient);
  }

  async saveProduct(product: Product): Promise<Product> {
    const data = {
      uuid: product.uuid,
      name: product.name,
      price: product.price,
    };

    const savedProduct = await this.prismaClient.product.create({ data });
    return Product.fromData({
      id: savedProduct.id,
      uuid: savedProduct.uuid,
      name: savedProduct.name,
      price: savedProduct.price,
    });
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.prismaClient.product.findMany();

    const productsData = products.map((product) =>
      Product.fromData({
        id: product.id,
        uuid: product.uuid,
        name: product.name,
        price: product.price,
      }),
    );

    return productsData;
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.prismaClient.product.findUnique({ where: { id } });

    if (!product) throw new NotFoundError('Product not found');

    return Product.fromData({
      id: product.id,
      uuid: product.uuid,
      name: product.name,
      price: product.price,
    });
  }

  async getProductByName(name: string): Promise<Product> {
    const product = await this.prismaClient.product.findFirst({ where: { name } });

    if (!product) throw new NotFoundError('Product not found');

    return Product.fromData({
      id: product.id,
      uuid: product.uuid,
      name: product.name,
      price: product.price,
    });
  }

  async updateProduct(product: Partial<Product>): Promise<void> {
    const dataToUpdate = {
      ...(product.name && { name: product.name }),
      ...(product.price && { price: product.price }),
    };

    try {
      await this.prismaClient.product.update({
        where: { id: product.id },
        data: dataToUpdate,
      });
    } catch (error) {
      throw new NotFoundError('Product not found');
    }
  }

  async deleteProduct(id: number): Promise<void> {
    try {
      await this.prismaClient.product.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundError('Product not found');
    }
  }
}
