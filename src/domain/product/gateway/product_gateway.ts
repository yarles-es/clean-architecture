import { Product } from '../entity/product';

export interface ProductGateway {
  saveProduct(product: Product): Promise<Product>;
  getProductByName(name: string): Promise<Product | null>;
  getProductById(id: number): Promise<Product | null>;
  getAllProducts(): Promise<Product[]>;
  updateProduct(product: Partial<Product>): Promise<void>;
  deleteProduct(id: number): Promise<void>;
}
