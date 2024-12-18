import { RequestHandler } from 'express';
import { UserController } from '../../../../../controllers/http/user_controller';
import { BaseRoute, HttpMethod } from '../route';

export class GetAllUsersRoute extends BaseRoute {
  private constructor(controller: UserController, middlewares: RequestHandler[] = []) {
    super('/users', HttpMethod.GET, controller.getAllUsers.bind(controller), middlewares);
  }

  public static create(controller: UserController, middlewares: RequestHandler[] = []): GetAllUsersRoute {
    return new GetAllUsersRoute(controller, middlewares);
  }
}
