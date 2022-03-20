import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/services/user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from '../users/inputs/login-user.input';
import { UserEntity } from '../users/entities/user.entity';
import { CreateUserInput } from '../users/inputs/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(userInput: LoginUserInput) {
    const user = await this.validateUser(userInput);
    return this.generateToken(user);
  }

  async registration(userInput: CreateUserInput) {
    const candidate = await this.userService.getUserByEmail(userInput.email);
    if (candidate) {
      throw new UnauthorizedException({
        message: 'Пользователь с таким именем существует',
      });
    }
    const hashPassword = await bcrypt.hash(userInput.password, 10);
    const user = await this.userService.createUser({
      ...userInput,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async validateUser(userInput: LoginUserInput) {
    const user = await this.userService.getUserByEmail(userInput.email);
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

  private async generateToken(user: UserEntity) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
