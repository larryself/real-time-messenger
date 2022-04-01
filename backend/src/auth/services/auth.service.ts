import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { TokenDto } from '../dto/token.dto';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UserEntity } from '../../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async signUp(userDto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователь с такой почтой существует ',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.usersService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private async validateUser(userInput: CreateUserDto) {
    const user = await this.usersService.getUserByEmail(userInput.email);
    const passwordEquals = await bcrypt.compare(
      userInput.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }

  async refreshToken(tokenDto: TokenDto) {
    const user = await this.usersService.getUserByEmail(tokenDto.email);
    if (!user) throw new ForbiddenException('Access Denied');
    return await this.generateToken(user);
  }

  private async generateToken(user: UserEntity) {
    const payload = { email: user.email, name: user.name, id: user.id };
    return { token: this.jwtService.sign(payload) };
  }
}
