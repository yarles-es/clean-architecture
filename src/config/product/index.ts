import { PrismaClient } from '@prisma/client';
import { createProductRepositories } from './repositories';
import { createProductUsecases } from './usecases';

type ProductModule = {
  repositories: ReturnType<typeof createProductRepositories>;
  usecases: ReturnType<typeof createProductUsecases>;
};

export const createProductModule = (prismaClient: PrismaClient): ProductModule => {
  const repositories = createProductRepositories(prismaClient);
  const usecases = createProductUsecases(repositories);

  return { repositories, usecases };
};
