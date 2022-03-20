import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PostService } from '../services/posts.service';
import { PostEntity } from '../entities/post.entity';
import { CreatePostInput } from '../inputs/create-post.input';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => PostEntity)
  async createPost(@Args('createPost') createPostInput: CreatePostInput) {
    return await this.postService.createPost(createPostInput);
  }

  @Query(() => [PostEntity])
  async getAllPosts(): Promise<PostEntity[]> {
    return await this.postService.getAllPosts();
  }
}
