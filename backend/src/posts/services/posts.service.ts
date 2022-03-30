import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createPost(postDto: CreatePostDto): Promise<PostEntity> {
    return await this.postRepository.save({ ...postDto });
  }

  async getAllPosts(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }
}
