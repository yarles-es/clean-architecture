import { RequestHandler } from 'express';
import { ProductController } from '../../../../../controllers/http/product_controller';
import { BaseRoute, HttpMethod } from '../route';

export class DeleteProductRoute extends BaseRoute {
  private constructor(controller: ProductController, middlewares: RequestHandler[] = []) {
    super('/products/:id', HttpMethod.DELETE, controller.deleteProduct.bind(controller), middlewares);
  }

  public static create(
    controller: ProductController,
    middlewares: RequestHandler[] = [],
  ): DeleteProductRoute {
    return new DeleteProductRoute(controller, middlewares);
  }
}
