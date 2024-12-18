import { RequestHandler } from 'express';
import { UserController } from '../../../../../controllers/http/user_controller';
import { BaseRoute, HttpMethod } from '../route';

export class GetUserByIdRoute extends BaseRoute {
  private constructor(controller: UserController, middlewares: RequestHandler[] = []) {
    super('/users/:id', HttpMethod.GET, controller.getUserById.bind(controller), middlewares);
  }

  public static create(controller: UserController, middlewares: RequestHandler[] = []): GetUserByIdRoute {
    return new GetUserByIdRoute(controller, middlewares);
  }
}
