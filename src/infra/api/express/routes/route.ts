import { NextFunction, Request, RequestHandler, Response } from 'express';

export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export const HttpMethod = {
  GET: 'get' as HttpMethod,
  POST: 'post' as HttpMethod,
  PUT: 'put' as HttpMethod,
  DELETE: 'delete' as HttpMethod,
} as const;

interface Route {
  getHandler(): RequestHandler;
  getPath(): string;
  getMethod(): HttpMethod;
  getMiddlewares(): Array<(req: Request, res: Response, next: NextFunction) => void>;
}

export abstract class BaseRoute implements Route {
  constructor(
    protected readonly path: string,
    protected readonly method: HttpMethod,
    protected readonly handler: RequestHandler,
    protected readonly middlewares: RequestHandler[] = [],
  ) {}

  public getPath(): string {
    return this.path;
  }

  public getMethod(): HttpMethod {
    return this.method;
  }

  public getHandler(): RequestHandler {
    return this.handler;
  }

  public getMiddlewares(): RequestHandler[] {
    return this.middlewares;
  }
}
