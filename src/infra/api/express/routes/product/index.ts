import { Router } from 'express';
import { ProductController } from '../../../../../controllers/http/product_controller';
import { CreateProductRoute } from './create_product_route';
import { DeleteProductRoute } from './delete_product_route';
import { GetAllProductRoute } from './get_all_products_route';
import { GetProductByIdRoute } from './get_product_by_id_route';
import { GetProductByNameRoute } from './get_product_by_name_route';
import { UpdateProductRoute } from './update_product_route';

export const registerProductRoutes = (router: Router, controller: ProductController): void => {
  const routes = [
    CreateProductRoute.create(controller),
    GetAllProductRoute.create(controller),
    UpdateProductRoute.create(controller),
    DeleteProductRoute.create(controller),
    GetProductByIdRoute.create(controller),
    GetProductByNameRoute.create(controller),
  ];
  routes.forEach((route) => {
    router[route.getMethod()](route.getPath(), ...route.getMiddlewares(), route.getHandler());
  });
};
