import { BaseError } from './@base_error';

export class UnprocessableEntityError extends BaseError {
  constructor(message: string, code: number = 422) {
    super(message, code, 'UnprocessableEntityError');
  }
}
