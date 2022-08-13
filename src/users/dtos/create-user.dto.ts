import { USER_ROLE } from '../types/users.types';

export class CreateUserDto {
  public name: string;
  public age: number;
  public role: USER_ROLE;
  public active: boolean;
}
