import { RequestHandler } from 'express';
import { ProductController } from '../../../../../controllers/http/product_controller';
import { BaseRoute, HttpMethod } from '../route';

export class GetAllProductRoute extends BaseRoute {
  private constructor(controller: ProductController, middlewares: RequestHandler[] = []) {
    super('/products', HttpMethod.GET, controller.getAllProducts.bind(controller), middlewares);
  }

  public static create(
    controller: ProductController,
    middlewares: RequestHandler[] = [],
  ): GetAllProductRoute {
    return new GetAllProductRoute(controller, middlewares);
  }
}
