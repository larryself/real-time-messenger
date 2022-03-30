import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.save(dto);
    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ id });
    return user;
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ email });
    return user;
  }

  async getUserByName(name: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ name });
    return user;
  }
}
