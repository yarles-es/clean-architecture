import { UserController } from '../../controllers/http/user_controller';
import { createUserUsecases } from './usecases';

export const createUserController = (useCases: ReturnType<typeof createUserUsecases>) => {
  return new UserController(useCases);
};
