import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import joiValidate from 'src/utils/joiValidator';
import { createUserSchema, updateUserSchema } from './user.schema';
import { PublicRoute } from 'src/decorators/public-route.decorator';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  validateId(id: string) {
    const parsedId = +id;
    if (isNaN(parsedId)) throw new BadRequestException("Invalid id.");
  }

  @PublicRoute()
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    joiValidate(createUserSchema, createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('users/:id')
  findOne(@Param('id') id: string) {
    this.validateId(id);
    return this.usersService.findOne(+id);
  }

  @Patch('users/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.validateId(id);
    joiValidate(updateUserSchema, updateUserDto);
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('users/:id')
  remove(@Param('id') id: string) {
    this.validateId(id);
    return this.usersService.remove(+id);
  }
}
