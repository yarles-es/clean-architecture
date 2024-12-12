import { PrismaClient } from '@prisma/client';
import { createProductController } from './controller';
import { createProductRepositories } from './repositories';
import { createProductUsecases } from './usecases';

export const createProductModule = (prismaClient: PrismaClient) => {
  const repositories = createProductRepositories(prismaClient);
  const usecases = createProductUsecases(repositories);
  const controllers = createProductController(usecases);

  return { repositories, usecases, controllers };
};
