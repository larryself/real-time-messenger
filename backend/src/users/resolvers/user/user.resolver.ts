import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from '../../entities/user.entity';
import { UserService } from '../../services/user/user.service';
import { CreateUserInput } from '../../inputs/create-user.input';
import { UpdateUserInput } from '../../inputs/update-user.input';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guerd';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(@Args('createUser') createUserInput: CreateUserInput) {
    const candidate = await this.userService.getUserByEmail(
      createUserInput.email,
    );
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10);
    const createdUser = await this.userService.createUser({
      ...createUserInput,
      password: hashedPassword,
    });
    return createdUser;
  }

  @Query(() => UserEntity)
  async getOneUser(@Args('id') id: number): Promise<UserEntity> {
    return await this.userService.getOneUser(id);
  }

  @Query(() => UserEntity)
  async getUserByEmail(@Args('email') email: string): Promise<UserEntity> {
    return await this.userService.getUserByEmail(email);
  }

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUser') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }
}
