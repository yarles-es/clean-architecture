export class DomainValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DomainValidationError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
