import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userInput: AuthDto) {
    const user = await this.validateUser(userInput);
    return this.generateToken(user);
  }

  async registration(userInput: AuthDto) {
    const candidateEmail = await this.usersService.getUserByEmail(
      userInput.email,
    );
    const candidateName = await this.usersService.getUserByName(userInput.name);
    if (candidateEmail) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Пользователь с такой почтой существует ',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (candidateName) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Пользователь с таким именем существует ',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const hashPassword = await bcrypt.hash(userInput.password, 10);
    const user = await this.usersService.createUser({
      ...userInput,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async validateUser(userInput: AuthDto) {
    const user = await this.usersService.getUserByEmail(userInput.email);
    const name = await this.usersService.getUserByName(userInput.name);
    const passwordEquals = await bcrypt.compare(
      userInput.password,
      user.password,
    );
    if (user && name && passwordEquals) {
      return user;
    }
    throw new HttpException(
      {
        error: 'Некорректный email или имя или пароль',
        status: HttpStatus.BAD_REQUEST,
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  private async generateToken(user: {
    email: string;
    id: number;
    name: string;
    token?: string;
  }) {
    const payload = { email: user.email, name: user.name };
    return { ...payload, id: user.id, token: this.jwtService.sign(payload) };
  }
}
