import { PrismaClient } from '@prisma/client';
import { createProductModule } from './config/product';
import { createProductController } from './config/product/controller';
import { createUserModule } from './config/user';
import { createUserController } from './config/user/controller';

export class App {
  private prismaClient: PrismaClient;
  private productModule: ReturnType<typeof createProductModule>;
  private productController: ReturnType<typeof createProductController>;
  private userModule: ReturnType<typeof createUserModule>;
  private userController: ReturnType<typeof createUserController>;

  constructor() {
    this.prismaClient = new PrismaClient();
    this.productModule = createProductModule(this.prismaClient);
    this.userModule = createUserModule(this.prismaClient);
    this.productController = createProductController(this.productModule.usecases);
    this.userController = createUserController(this.userModule.usecases);
  }

  public getControllers() {
    return {
      productController: this.productController,
      userController: this.userController,
    };
  }
}
