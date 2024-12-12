import { NextFunction, Request, Response } from 'express';
import { ProductUseCases } from './types/product_usecases';

export class ProductController {
  constructor(private readonly useCases: ProductUseCases) {}

  public async createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, price } = req.body;
      const product = await this.useCases.createProductUsecase.execute({ name, price });
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  public async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await this.useCases.deleteProductUsecase.execute({ id: Number(id) });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  public async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products = await this.useCases.getAllProductsUsecase.execute();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  public async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const product = await this.useCases.getProductByIdUsecase.execute({ id: Number(id) });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  public async getProductByName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name } = req.params;
      const product = await this.useCases.getProductByNameUsecase.execute({ name });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  public async updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const product = await this.useCases.updateProductUsecase.execute({ id: Number(id), name, price });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}
