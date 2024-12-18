import { Router } from 'express';
import { UserController } from '../../../../../controllers/http/user_controller';
import { CreateUserRoute } from './create_user_route';
import { DeleteUserRoute } from './delete_user_route';
import { GetAllUsersRoute } from './get_all_users_route';
import { GetUserByEmailRoute } from './get_user_by_email_route';
import { GetUserByIdRoute } from './get_user_by_id_route';
import { UpdateUserRoute } from './update_user_route';

export const registerUserRoutes = (router: Router, controller: UserController) => {
  const routes = [
    CreateUserRoute.create(controller),
    DeleteUserRoute.create(controller),
    GetAllUsersRoute.create(controller),
    GetUserByIdRoute.create(controller),
    GetUserByEmailRoute.create(controller),
    UpdateUserRoute.create(controller),
  ];

  routes.forEach((route) =>
    router[route.getMethod()](route.getPath(), ...route.getMiddlewares(), route.getHandler()),
  );
};
