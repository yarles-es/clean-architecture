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
