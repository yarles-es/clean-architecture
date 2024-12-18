import { RequestHandler } from 'express';
import { UserController } from '../../../../../controllers/http/user_controller';
import { BaseRoute, HttpMethod } from '../route';

export class UpdateUserRoute extends BaseRoute {
  private constructor(controller: UserController, middlewares: RequestHandler[] = []) {
    super('/users/:id', HttpMethod.PUT, controller.updateUser.bind(controller), middlewares);
  }

  public static create(controller: UserController, middlewares: RequestHandler[] = []): UpdateUserRoute {
    return new UpdateUserRoute(controller, middlewares);
  }
}
