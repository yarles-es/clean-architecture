import { RequestHandler } from 'express';
import { ProductController } from '../../../../../controllers/http/product_controller';
import { BaseRoute, HttpMethod } from '../route';

export class GetProductByIdRoute extends BaseRoute {
  private constructor(controller: ProductController, middlewares: RequestHandler[] = []) {
    super('/products/by-id/:id', HttpMethod.GET, controller.getProductById.bind(controller), middlewares);
  }

  public static create(
    controller: ProductController,
    middlewares: RequestHandler[] = [],
  ): GetProductByIdRoute {
    return new GetProductByIdRoute(controller, middlewares);
  }
}
