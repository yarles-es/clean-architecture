import { ProductController } from '../../controllers/http/product_controller';
import { createProductUsecases } from './usecases';

export const createProductController = (usecases: ReturnType<typeof createProductUsecases>) => {
  return new ProductController(usecases);
};
