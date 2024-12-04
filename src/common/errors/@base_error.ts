export class BaseError extends Error {
  public code: number;

  constructor(message: string, code: number, name: string) {
    super(message);
    this.name = name;
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
