import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserEntity } from '../../users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(userInput: {
    email: string;
    password: string;
  }): Promise<UserEntity> {
    const user = await this.authService.validateUser(userInput);
    if (!user) {
      throw new UnauthorizedException('Пароль и логин не подходят');
    }
    return user;
  }
}
