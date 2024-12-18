import { RequestHandler } from 'express';
import { ProductController } from '../../../../../controllers/http/product_controller';
import { BaseRoute, HttpMethod } from '../route';

export class GetProductByNameRoute extends BaseRoute {
  private constructor(controller: ProductController, middlewares: RequestHandler[] = []) {
    super(
      '/products/by-name/:name',
      HttpMethod.GET,
      controller.getProductByName.bind(controller),
      middlewares,
    );
  }

  public static create(
    controller: ProductController,
    middlewares: RequestHandler[] = [],
  ): GetProductByNameRoute {
    return new GetProductByNameRoute(controller, middlewares);
  }
}
