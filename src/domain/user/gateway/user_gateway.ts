import { User } from '../entity/user';

export interface UserGateway {
  saveUser(user: User): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  getUserById(id: number): Promise<User>;
  getAllUsers(): Promise<User[]>;
  updateUser(user: Partial<User>): Promise<void>;
  deleteUser(id: number): Promise<void>;
}
