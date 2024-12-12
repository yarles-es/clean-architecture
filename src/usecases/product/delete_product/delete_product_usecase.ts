import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { DeleteProductInputDto, DeleteProductOutputDto } from '../../../dtos/product/delete_product_dto';
import { Usecase } from '../../usecase';

export class DeleteProductUseCase implements Usecase<DeleteProductInputDto, DeleteProductOutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): DeleteProductUseCase {
    return new DeleteProductUseCase(productGateway);
  }

  public async execute({ id }: DeleteProductInputDto): Promise<DeleteProductOutputDto> {
    await this.productGateway.deleteProduct(id);
  }
}
