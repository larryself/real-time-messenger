import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  // NOTE** - It is extremely important to make sure that all modules
  // that use this AuthGuard must have CacheManager registered in it's imports.
  constructor(@Inject(CACHE_MANAGER) private cacheManager) {}
  // Method that gets triggered when AuthGuard (Middleware) gets invoked.
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Extract the request object from the execution context.
    const request = context.switchToHttp().getRequest();
    return this.authorizeRequest(request);
  }
  authorizeRequest(request: any): boolean {
    const {
      headers: { authorization },
    } = request;
    if (!authorization) {
      throw new HttpException(
        'No authorization header provided',
        HttpStatus.BAD_REQUEST,
      );
    }
    const authFragments = authorization.split(' ');
    if (authFragments[0] !== 'Bearer') {
      throw new HttpException(
        'Invalid authorization header',
        HttpStatus.BAD_REQUEST,
      );
    }
    const token = authFragments[1];
    try {
      const decodedToken: any = jwt.verify(
        token,
        process.env.SECRET || 'tinchat',
      );
      // Auth guard here is also working as a neat middleware.
      request.body.from = decodedToken.email;
      return !!decodedToken && this.cacheManager.get(decodedToken.email);
    } catch (err) {
      return false;
    }
  }
}
