import { Module } from '@nestjs/common';
import { PostService } from './services/posts.service';
import { PostResolver } from './resolvers/posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService, PostResolver],
})
export class PostsModule {}
