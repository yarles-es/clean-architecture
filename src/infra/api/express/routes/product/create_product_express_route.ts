import { RequestHandler } from 'express';
import { ProductController } from '../../../../../controllers/http/product_controller';
import { BaseRoute } from '../route';

export class CreateProductRoute extends BaseRoute {
  private constructor(controller: ProductController, middlewares: RequestHandler[] = []) {
    super('/products', 'post', controller.createProduct.bind(controller), middlewares);
  }

  public static create(
    controller: ProductController,
    middlewares: RequestHandler[] = [],
  ): CreateProductRoute {
    return new CreateProductRoute(controller, middlewares);
  }
}
