import { PrismaClient } from '@prisma/client';
import { createServices } from '../services';
import { createUserRepositories } from './repositories';
import { createUserUsecases } from './usecases';

type UserModule = {
  repositories: ReturnType<typeof createUserRepositories>;
  services: ReturnType<typeof createServices>;
  usecases: ReturnType<typeof createUserUsecases>;
};

export const createUserModule = (prismaClient: PrismaClient): UserModule => {
  const repositories = createUserRepositories(prismaClient);
  const services = createServices();
  const usecases = createUserUsecases(repositories, services);

  return { repositories, services, usecases };
};
