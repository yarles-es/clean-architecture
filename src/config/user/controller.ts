import { UserController } from '../../interfaces/http/user_controller';
import { createUserUsecases } from './usecases';

export const createUserController = (useCases: ReturnType<typeof createUserUsecases>) => ({
  userController: new UserController(useCases),
});
