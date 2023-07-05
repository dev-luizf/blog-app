import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import argon2Helper from 'src/utils/argon2Helper';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async create(createUserDto: CreateUserDto) {
    const usernameExists = await this.findByUsername(createUserDto.username);
    if (usernameExists) {
      throw new ConflictException('Username already exists.');
    }
    const passwordHash = await argon2Helper.hash(createUserDto.password);

    const newUser = {
      ...createUserDto,
      password: passwordHash,
    };

    const user = await this.prisma.user.create({ data: newUser });
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
        isAdmin: true,
      },
    });
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        isAdmin: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const data = { ...user, ...updateUserDto };
    await this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.user.delete({ where: { id } });
  }
}
