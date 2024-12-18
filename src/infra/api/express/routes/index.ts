import { Router } from 'express';
import { ProductController } from '../../../../controllers/http/product_controller';
import { UserController } from '../../../../controllers/http/user_controller';
import { registerProductRoutes } from './product';
import { registerUserRoutes } from './user';

type Controllers = {
  userController: UserController;
  productController: ProductController;
};

export const registerRoutes = (router: Router, controllers: Controllers): void => {
  registerProductRoutes(router, controllers.productController);
  registerUserRoutes(router, controllers.userController);
};
