/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) { }

  @Get()
  public getUsers(){
    // return this.appService.getAllUsers();
  }

  @Delete('/:id')
  public deleteUserById(@Param('id') id: string) {
    return this.appService.deleteUserById(id);
  }


  @Post()
  public createUser(@Body() body){
    // return this.appService.createUser(body);
  }

  @Put('/:id')
  public updateUser(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
  ) {
    return this.appService.putUserById(id, body);
  }
}