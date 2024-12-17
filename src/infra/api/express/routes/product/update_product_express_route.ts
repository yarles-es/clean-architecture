import { RequestHandler } from 'express';
import { ProductController } from '../../../../../controllers/http/product_controller';
import { BaseRoute, HttpMethod } from '../route';

export class UpdateProductRoute extends BaseRoute {
  private constructor(controller: ProductController, middlewares: RequestHandler[] = []) {
    super('/products/:id', HttpMethod.PUT, controller.updateProduct.bind(controller), middlewares);
  }

  public static create(
    controller: ProductController,
    middlewares: RequestHandler[] = [],
  ): UpdateProductRoute {
    return new UpdateProductRoute(controller, middlewares);
  }
}
