import { CreateUserUsecase } from '../../usecases/user/create_user/create_user_usecase';
import { DeleteUserUsecase } from '../../usecases/user/delete_user/delete_user_usecase';
import { GetAllUserUsecase } from '../../usecases/user/get_all_users/get_all_users_usecase';
import { GetUserByEmailUsecase } from '../../usecases/user/get_user_by_email/get_user_by_email_usecase';
import { GetUserByIdUsecase } from '../../usecases/user/get_user_by_id/get_user_by_id_usecase';
import { UpdateUserUsecase } from '../../usecases/user/update_user/update_user_usecase';
import { createServices } from '../services';
import { createUserRepositories } from './repositories';

export const createUserUsecases = (
  repositories: ReturnType<typeof createUserRepositories>,
  services: ReturnType<typeof createServices>,
) => ({
  createUserUsecase: new CreateUserUsecase(repositories.userRepository, services.encryptorService),
  deleteUserUsecase: new DeleteUserUsecase(repositories.userRepository),
  getAllUsersUsecase: new GetAllUserUsecase(repositories.userRepository),
  getUserByIdUsecase: new GetUserByIdUsecase(repositories.userRepository),
  getUserByEmailUsecase: new GetUserByEmailUsecase(repositories.userRepository),
  updateUserUsecase: new UpdateUserUsecase(repositories.userRepository),
});
