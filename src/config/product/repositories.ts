import { PrismaClient } from '@prisma/client';
import { ProductRepositoryPrisma } from '../../infra/repositories/product/product_repository_prisma';

export const createProductRepositories = (prismaClient: PrismaClient) => ({
  productRepository: ProductRepositoryPrisma.create(prismaClient),
});
