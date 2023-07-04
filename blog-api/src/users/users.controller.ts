import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import joiValidate from 'src/utils/joiValidator';
import { createUserSchema, updateUserSchema } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  validateId(id: string) {
    const parsedId = +id;
    if (isNaN(parsedId)) throw new BadRequestException("Invalid id.");
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    joiValidate(createUserSchema, createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.validateId(id);
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.validateId(id);
    joiValidate(updateUserSchema, updateUserDto);
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.validateId(id);
    return this.usersService.remove(+id);
  }
}
