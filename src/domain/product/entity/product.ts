import { randomUUID } from 'crypto';
import { DomainValidationError } from '../../errors/domain_validation_error';

export type ProductProps = {
  id?: number;
  uuid: string;
  name: string;
  price: number;
};

export class Product {
  private constructor(private props: ProductProps) {
    this.validateName(this.props.name);
    this.validatePrice(this.props.price);
  }

  public static createNew(name: string, price: number) {
    return new Product({
      name,
      price,
      uuid: randomUUID(),
    });
  }

  public static fromData(props: ProductProps) {
    if (props.id === undefined) {
      throw new DomainValidationError('Product ID must be provided');
    }
    return new Product(props);
  }

  private validatePrice(price: number) {
    if (price <= 0) throw new DomainValidationError('The price of the product must be higher than 0');
  }

  private validateName(name: string) {
    if (name.length < 3) throw new DomainValidationError('Name must be at least 3 characters long');
  }

  public get id() {
    return this.props.id;
  }

  public get uuid() {
    return this.props.uuid;
  }

  public get name() {
    return this.props.name;
  }

  public get price() {
    return this.props.price;
  }

  public withUpdatedName(newName: string): Product {
    this.validateName(newName);
    return new Product({ ...this.props, name: newName });
  }

  public withUpdatedPrice(newPrice: number): Product {
    this.validatePrice(newPrice);
    return new Product({ ...this.props, price: newPrice });
  }
}
