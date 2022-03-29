import { Module } from '@nestjs/common';
import { PostService } from './services/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { PostsController } from './posts.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), AuthModule],
  providers: [PostService],
  controllers: [PostsController],
  exports: [PostService],
})
export class PostsModule {}
