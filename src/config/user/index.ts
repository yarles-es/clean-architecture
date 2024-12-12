import { PrismaClient } from '@prisma/client';
import { createServices } from '../services';
import { createUserController } from './controller';
import { createUserRepositories } from './repositories';
import { createUserUsecases } from './usecases';

export const createUserModule = (prismaClient: PrismaClient) => {
  const repositories = createUserRepositories(prismaClient);
  const services = createServices();
  const usecases = createUserUsecases(repositories, services);
  const controllers = createUserController(usecases);

  return { repositories, services, usecases, controllers };
};
