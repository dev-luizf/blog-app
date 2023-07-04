import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { PublicRoute } from 'src/decorators/public-route.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @PublicRoute()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
