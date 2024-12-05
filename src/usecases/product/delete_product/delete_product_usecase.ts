import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { Usecase } from '../../usecase';

export type DeleteProductInputDto = {
  id: number;
};

export type DeleteProductOutputDto = void;

export class DeleteProductUseCase implements Usecase<DeleteProductInputDto, DeleteProductOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): DeleteProductUseCase {
    return new DeleteProductUseCase(productGateway);
  }

  public async execute({ id }: DeleteProductInputDto): Promise<DeleteProductOutputDto> {
    await this.productGateway.deleteProduct(id);
  }
}
