import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/decorators/public-route.decorator';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: any,
    status?: any,
  ): TUser {
    if (info instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedException('Expired token.');
    }

    if (info && info.message === 'No auth token') {
      throw new UnauthorizedException('Auth token is required.');
    }

    if (info instanceof jwt.JsonWebTokenError) {
      throw new UnauthorizedException('Invalid token.');
    }

    if (err || !user) throw err || new UnauthorizedException();

    return user;
  }
}
