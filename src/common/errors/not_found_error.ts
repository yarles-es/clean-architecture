import { BaseError } from './@base_error';

export class NotFoundError extends BaseError {
  constructor(message: string, code: number = 404) {
    super(message, code, 'NotFoundError');
  }
}
