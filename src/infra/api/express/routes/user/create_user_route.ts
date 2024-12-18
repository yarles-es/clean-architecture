import { RequestHandler } from 'express';
import { UserController } from '../../../../../controllers/http/user_controller';
import { BaseRoute, HttpMethod } from '../route';

export class CreateUserRoute extends BaseRoute {
  private constructor(controller: UserController, middlewares: RequestHandler[] = []) {
    super('/users', HttpMethod.POST, controller.createUser.bind(controller), middlewares);
  }

  public static create(controller: UserController, middlewares: RequestHandler[] = []): CreateUserRoute {
    return new CreateUserRoute(controller, middlewares);
  }
}
