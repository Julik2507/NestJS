import { Injectable } from '@nestjs/common';
import { users } from '../../moks/index';

@Injectable()
export class UserService {
  getBye(): string {
    return 'bye world';
  }

  getUser() {
    return users;
  }
}
