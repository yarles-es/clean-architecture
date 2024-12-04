import { Product } from '../entity/product';

export interface ProductGateway {
  saveProduct(product: Product): Promise<void>;
  getProductById(id: number): Promise<Product>;
  getAllProducts(): Promise<Product[]>;
  updateProduct(product: Partial<Product>): Promise<void>;
  deleteProduct(id: number): Promise<void>;
}
