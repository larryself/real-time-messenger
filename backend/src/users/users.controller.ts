import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './services/users.service';
import { UserEntity } from './entities/user.entity';

@ApiTags('Пользователь')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, description: 'Созданный пользователь' })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({
    status: 200,
    description: 'Все зарегистрированные пользователи',
  })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

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
