import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { UserGateway } from '../../../domain/user/gateway/user_gateway';
import { DeleteProductInputDto, DeleteProductOutputDto } from '../../../models/product/delete_product_dto';
import { Usecase } from '../../usecase';

export class DeleteProductUseCase implements Usecase<DeleteProductInputDto, DeleteProductOutputDto> {
  constructor(private readonly productGateway: ProductGateway, private readonly userGateway: UserGateway) {}

  public static create(productGateway: ProductGateway, userGateway: UserGateway): DeleteProductUseCase {
    return new DeleteProductUseCase(productGateway, userGateway);
  }

  public async execute({ id }: DeleteProductInputDto): Promise<DeleteProductOutputDto> {
    await this.productGateway.deleteProduct(id);
  }
}
