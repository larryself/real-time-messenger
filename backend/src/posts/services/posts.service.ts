import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entities/post.entity';
import { CreatePostInput } from '../inputs/create-post.input';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createPost(userInput: CreatePostInput): Promise<PostEntity> {
    return await this.postRepository.save({ ...userInput });
  }

  async getAllPosts(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }
}
