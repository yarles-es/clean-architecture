import { NextFunction, Request, Response } from 'express';
import { UserUseCases } from './types/user_usecases';

export class UserController {
  constructor(private readonly useCases: UserUseCases) {}

  public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const user = await this.useCases.createUserUsecase.execute({ name, email, password });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await this.useCases.deleteUserUsecase.execute({ id: Number(id) });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.useCases.getAllUsersUsecase.execute();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  public async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.useCases.getUserByIdUsecase.execute({ id: Number(id) });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async getUserByEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email } = req.params;
      const user = await this.useCases.getUserByEmailUsecase.execute({ email });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const user = await this.useCases.updateUserUsecase.execute({ id: Number(id), name, email, password });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
