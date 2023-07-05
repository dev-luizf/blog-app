import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import joiValidate from 'src/utils/joiValidator';
import { createPostSchema, updatePostSchema } from './posts.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  validateId(id: string) {
    const parsedId = +id;
    if (isNaN(parsedId)) throw new BadRequestException('Invalid id.');
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    joiValidate(createPostSchema, CreatePostDto);
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('/me')
  async myPosts(@Req() req: any) {
    const posts = await this.postsService.findByAuthor(req.user.userId);
    return posts.map((post) => ({
      ...post,
      author: req.user.username,
    }));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.validateId(id);
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    this.validateId(id);
    joiValidate(updatePostSchema, updatePostDto);
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.validateId(id);
    return this.postsService.remove(+id);
  }
}
