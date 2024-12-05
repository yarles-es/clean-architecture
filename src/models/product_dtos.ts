export type CreateproductInputDto = {
  name: string;
  price: number;
};

export type CreateproductOutputDto = {
  id: number;
};

export type GetProductOutputDto = {
  id: number;
  uuid: string;
  name: string;
  price: number;
};

export type GetAllProductsInputDto = void;

export type GetAllProductsOutputDto = GetProductOutputDto[];

export type GetProductByIdInputDto = {
  id: number;
};

export type GetProductByNameInputDto = {
  name: string;
};

export type UpdateProductInputDto = Partial<{
  name: string;
  price: number;
}>;

export type UpdateProductoutputDto = void;
