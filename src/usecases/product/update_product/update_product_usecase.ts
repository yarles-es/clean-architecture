import { ProductGateway } from '../../../domain/product/gateway/product_gateway';
import { UpdateProductInputDto, UpdateProductoutputDto } from '../../../models/product/update_product_dto';
import { Usecase } from '../../usecase';

export class UpdateProductUsecase implements Usecase<UpdateProductInputDto, UpdateProductoutputDto> {
  constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway): UpdateProductUsecase {
    return new UpdateProductUsecase(productGateway);
  }

  public async execute(data: UpdateProductInputDto): Promise<UpdateProductoutputDto> {
    await this.productGateway.updateProduct(data);
  }
}
