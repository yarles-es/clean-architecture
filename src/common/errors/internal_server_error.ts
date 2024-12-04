import { BaseError } from './@base_error';

export class InternalServerError extends BaseError {
  constructor(message: string, code: number = 500) {
    super(message, code, 'InternalServerError');
  }
}
