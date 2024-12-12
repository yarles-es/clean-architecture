import { PrismaClient } from '@prisma/client';
import { createProductModule } from './config/product';
import { createUserModule } from './config/user';

export class App {
  private prismaClient: PrismaClient;
  private productModule: ReturnType<typeof createProductModule>;
  private userModule: ReturnType<typeof createUserModule>;

  constructor() {
    this.prismaClient = new PrismaClient();
    this.productModule = createProductModule(this.prismaClient);
    this.userModule = createUserModule(this.prismaClient);
  }

  public getControllers() {
    return {
      productController: this.productModule.controllers,
      userController: this.userModule.controllers,
    };
  }
}
