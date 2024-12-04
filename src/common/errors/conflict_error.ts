import { BaseError } from './@base_error';

export class ConflictError extends BaseError {
  constructor(message: string, code: number = 409) {
    super(message, code, 'ConflictError');
  }
}
