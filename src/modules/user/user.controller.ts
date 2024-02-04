import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { users } from 'src/moks';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('bye')
  getBye4ik(): string {
    return this.UserService.getBye();
  }

  @Get('friends')
  getOneFriend() {
    return this.UserService.getUser();
  }
}
