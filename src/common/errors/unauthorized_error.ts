import { BaseError } from './@base_error';

export class UnauthorizedError extends BaseError {
  constructor(message: string, code: number = 401) {
    super(message, code, 'UnauthorizedError');
  }
}
