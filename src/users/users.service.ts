import { Body, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateUserDto } from './dtos/create-user.dto';


@Injectable()
export class UsersService {

  public getAllUsers() {

  }

  public getUsersById() {

  }

  public deleteUserById(id: string): void {

  }

  public createUser(@Body() body) {


  }
  public putUserById(id: string, user: CreateUserDto) {

  }
}
