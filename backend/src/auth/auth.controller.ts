import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TokenDto } from './dto/token.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация' })
  @ApiResponse({ status: 200 })
  @Post('/login')
  login(@Body() userDto: AuthDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200 })
  @Post('/signup')
  registration(@Body() userDto: AuthDto) {
    return this.authService.registration(userDto);
  }

  @ApiOperation({ summary: 'Обновление токена' })
  @ApiResponse({ status: 200 })
  @Post('/refresh')
  refreshTokens(@Body() userDto: TokenDto) {
    return this.authService.refreshToken(userDto);
  }
}
