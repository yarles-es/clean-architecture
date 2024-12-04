import { BaseError } from './@base_error';

export class ForbiddenError extends BaseError {
  constructor(message: string, code: number = 403) {
    super(message, code, 'ForbiddenError');
  }
}
