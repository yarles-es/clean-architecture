import { UserController } from '../../controllers/http/user_controller';
import { createUserUsecases } from './usecases';

export const createUserController = (useCases: ReturnType<typeof createUserUsecases>) => ({
  userController: new UserController(useCases),
});
