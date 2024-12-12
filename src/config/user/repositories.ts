import { PrismaClient } from '@prisma/client';
import { UserRepositoryPrisma } from '../../infra/repositories/user/user_repository_prisma';

export const createUserRepositories = (prismaClient: PrismaClient) => ({
  userRepository: UserRepositoryPrisma.create(prismaClient),
});
