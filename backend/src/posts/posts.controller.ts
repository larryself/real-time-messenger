import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './services/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { MessageResponseDTO } from './dto/response-post.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
  constructor(private payService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Создать пост' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() postDto: CreatePostDto): Promise<MessageResponseDTO> {
    return this.payService.createPost(postDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Получить все сообщения' })
  @ApiResponse({ status: 200 })
  @Get()
  getAll(): Promise<MessageResponseDTO[]> {
    return this.payService.getAllPosts();
  }
}
