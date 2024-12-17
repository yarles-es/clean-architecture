import { ProductController } from '../../controllers/http/product_controller';
import { createProductUsecases } from './usecases';

export const createProductController = (useCases: ReturnType<typeof createProductUsecases>) => ({
  productController: new ProductController(useCases),
});
