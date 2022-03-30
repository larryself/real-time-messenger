import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './services/users.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@ApiTags('Пользователь')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({
    status: 200,
    description: 'Все зарегистрированные пользователи',
  })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Получение пользователя по ID' })
  @ApiResponse({
    status: 200,
    description: 'Найденный пользователь по ID',
  })
  @Get('/:id')
  getByID(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }
}
