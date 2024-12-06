import { PrismaClient } from '@prisma/client';
import { NotFoundError } from '../../../common/errors/not_found_error';
import { User } from '../../../domain/user/entity/user';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { Role } from '../../../models/user_dtos';

export class UserRepositoryPrisma implements UserGateway {
  private constructor(private readonly prismaClient: PrismaClient) {}

  public static create(prismaClient: PrismaClient): UserRepositoryPrisma {
    return new UserRepositoryPrisma(prismaClient);
  }

  async saveUser(user: User): Promise<User> {
    const data = {
      name: user.name,
      uuid: user.uuid,
      email: user.email,
      password: user.password,
      role: user.role,
    };

    const savedUser = await this.prismaClient.user.create({ data });
    return User.fromData({
      id: savedUser.id,
      uuid: savedUser.uuid,
      email: savedUser.email,
      name: savedUser.name,
      role: savedUser.role as Role,
      password: savedUser.password,
    });
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prismaClient.user.findMany();

    const usersData = users.map((user) =>
      User.fromData({
        id: user.id,
        uuid: user.uuid,
        email: user.email,
        name: user.name,
        role: user.role as Role,
        password: user.password,
      }),
    );

    return usersData;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.prismaClient.user.findUnique({ where: { id } });

    if (!user) throw new NotFoundError('User not found');

    return User.fromData({
      id: user.id,
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      role: user.role as Role,
      password: user.password,
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prismaClient.user.findFirst({ where: { email } });

    if (!user) throw new NotFoundError('User not found');

    return User.fromData({
      id: user.id,
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      role: user.role as Role,
      password: user.password,
    });
  }

  async getUserByUuid(uuid: string): Promise<User> {
    const user = await this.prismaClient.user.findFirst({ where: { uuid } });

    if (!user) throw new NotFoundError('User not found');

    return User.fromData({
      id: user.id,
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      role: user.role as Role,
      password: user.password,
    });
  }

  async updateUser(user: Partial<User>): Promise<void> {
    const dataToUpdate = {
      ...(user.name && { name: user.name }),
      ...(user.email && { email: user.email }),
      ...(user.password && { password: user.password }),
      ...(user.role && { role: user.role }),
    };

    try {
      await this.prismaClient.user.update({
        where: { id: user.id },
        data: dataToUpdate,
      });
    } catch (error) {
      throw new NotFoundError('User not found');
    }
  }

  async deleteUser(id: number): Promise<void> {
    try {
      await this.prismaClient.user.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundError('User not found');
    }
  }
}
