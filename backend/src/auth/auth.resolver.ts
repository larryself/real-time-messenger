import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserInput } from '../users/inputs/login-user.input';
import { CreateUserInput } from '../users/inputs/create-user.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => UserEntity)
  async login(
    @Args('login') userInput: LoginUserInput,
  ): Promise<{ token: string }> {
    return await this.authService.login(userInput);
  }

  @Mutation(() => UserEntity)
  async registration(
    @Args('user') userInput: CreateUserInput,
  ): Promise<{ token: string }> {
    return await this.authService.registration(userInput);
  }
}
