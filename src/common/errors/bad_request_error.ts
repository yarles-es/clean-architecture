import { BaseError } from './@base_error';

export class BadRequestError extends BaseError {
  constructor(message: string, code: number = 400) {
    super(message, code, 'BadRequestError');
  }
}
