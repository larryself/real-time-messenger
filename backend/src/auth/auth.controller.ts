import { Controller, Body, Post } from '@nestjs/common';
import { TokenDto } from './dto/token.dto';
import { AuthService } from './services/auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация' })
  @ApiResponse({ status: 200 })
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200 })
  @Post('/signup')
  signUp(@Body() userDto: CreateUserDto) {
    return this.authService.signUp(userDto);
  }

  @ApiOperation({ summary: 'Обновление токена' })
  @ApiResponse({ status: 200 })
  @Post('/refresh')
  refreshToken(@Body() userDto: TokenDto) {
    return this.authService.refreshToken(userDto);
  }
}
