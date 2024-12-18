import { RequestHandler } from 'express';
import { UserController } from '../../../../../controllers/http/user_controller';
import { BaseRoute, HttpMethod } from '../route';

export class DeleteUserRoute extends BaseRoute {
  private constructor(controller: UserController, middlewares: RequestHandler[] = []) {
    super('/users/:id', HttpMethod.DELETE, controller.deleteUser.bind(controller), middlewares);
  }

  public static create(controller: UserController, middlewares: RequestHandler[] = []): DeleteUserRoute {
    return new DeleteUserRoute(controller, middlewares);
  }
}
