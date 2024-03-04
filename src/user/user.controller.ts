import { Body, Controller, ForbiddenException, Get, HttpCode, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, UseFilters, ValidationPipe } from '@nestjs/common';
import { IPatchUserResponse, IPostUserResponse } from './user.interface';
import { UserService } from './user.service';

import { CREATED, UPDATED } from './user.contants';
import { User } from 'src/db/entities/user.entity';
import { DummyModule } from 'src/dummy/dynamicModule.module';
import { CustomExceptionFilter } from 'common/exceptions/exception.exceptionFilter';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { CustomException } from 'common/exceptions/customException.Exception';
import { UserDto } from './user.dto';

@Controller('/users')
//@UseFilters(new CustomExceptionFilter)
export class UserContoller {
  constructor(private readonly userService: UserService, @Inject('DYNAMIC_PROVIDER') private readonly dynamicProvider:DummyModule) {}

  @Get(':id')

  async getUser(@Param('id',ParseIntPipe) id: number): Promise<User> {
    console.log(`dynamic value ${this.dynamicProvider}`)
    throw new CustomException('error thrown from custom exception',HttpStatus.INTERNAL_SERVER_ERROR)
  
    return await this.userService.getUser(id);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    console.log(`dynamic value1 ${this.dynamicProvider}`)
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body(new ValidationPipe()) user: UserDto): Promise<IPostUserResponse> {
    const id = await this.userService.createUser(user);
    return { id, message: CREATED };
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() user: Partial<User>,
  ): Promise<IPatchUserResponse> {
    const result = await this.userService.updateUser(id, user);
    if (result) return { message: UPDATED };
  }
}
