import { CreateProductUsecase } from '../../../usecases/product/create_product/create_product_usecase';
import { DeleteProductUseCase } from '../../../usecases/product/delete_product/delete_product_usecase';
import { GetAllProductsUseCase } from '../../../usecases/product/get_all_products/get_all_products_usecase';
import { GetProductByIdUseCase } from '../../../usecases/product/get_product_by_id/get_product_by_id_usecase';
import { GetProductByNameUseCase } from '../../../usecases/product/get_product_by_name/get_product_by_name_usecase';
import { UpdateProductUsecase } from '../../../usecases/product/update_product/update_product_usecase';

export type ProductUseCases = {
  createProductUsecase: CreateProductUsecase;
  deleteProductUsecase: DeleteProductUseCase;
  getAllProductsUsecase: GetAllProductsUseCase;
  getProductByIdUsecase: GetProductByIdUseCase;
  getProductByNameUsecase: GetProductByNameUseCase;
  updateProductUsecase: UpdateProductUsecase;
};
