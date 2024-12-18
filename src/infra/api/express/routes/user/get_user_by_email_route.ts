import { RequestHandler } from 'express';
import { UserController } from '../../../../../controllers/http/user_controller';
import { BaseRoute, HttpMethod } from '../route';

export class GetUserByEmailRoute extends BaseRoute {
  private constructor(controller: UserController, middlewares: RequestHandler[] = []) {
    super('/users/:email', HttpMethod.GET, controller.getUserByEmail.bind(controller), middlewares);
  }

  public static create(controller: UserController, middlewares: RequestHandler[] = []): GetUserByEmailRoute {
    return new GetUserByEmailRoute(controller, middlewares);
  }
}
